import { query, transaction } from '@/lib/db';
import { authenticateUser } from '@/middleware/auth';
import { generateTicketCode } from '@/utils/auth';
import { sanitizeInput } from '@/utils/validations';

export async function GET(request) {
  try {
    const user = await authenticateUser(request);
    const { searchParams } = new URL(request.url);
    const estado = searchParams.get('estado');

    let sql = `
      SELECT 
        t.id,
        t.codigo_ticket,
        t.titulo,
        t.descripcion,
        t.asunto,
        t.prioridad,
        t.estado,
        t.canal,
        t.fecha_cierre,
        t.tiempo_resolucion,
        t.satisfaccion,
        t.comentario_cierre,
        t.created_at,
        a.nombres as asignado_nombres,
        a.apellidos as asignado_apellidos
      FROM tickets_soporte t
      LEFT JOIN administradores a ON t.asignado_a = a.id
      WHERE t.usuario_id = ?
    `;

    const params = [user.id];

    if (estado) {
      sql += ' AND t.estado = ?';
      params.push(estado);
    }

    sql += ' ORDER BY t.created_at DESC';

    const tickets = await query(sql, params);

    // Para cada ticket, obtener las respuestas
    for (let ticket of tickets) {
      const respuestas = await query(
        `SELECT 
          r.id,
          r.mensaje,
          r.archivo_adjunto,
          r.es_solucion,
          r.created_at,
          CASE 
            WHEN r.tipo_respondedor = 'Usuario' THEN CONCAT(u.nombres, ' ', u.apellidos)
            WHEN r.tipo_respondedor = 'Administrador' THEN CONCAT(a.nombres, ' ', a.apellidos)
            ELSE 'Sistema'
          END as respondedor_nombre,
          r.tipo_respondedor
        FROM respuestas_soporte r
        LEFT JOIN usuarios u ON r.respondido_por = u.id AND r.tipo_respondedor = 'Usuario'
        LEFT JOIN administradores a ON r.respondido_por = a.id AND r.tipo_respondedor = 'Administrador'
        WHERE r.ticket_id = ?
        ORDER BY r.created_at ASC`,
        [ticket.id]
      );

      ticket.respuestas = respuestas;
    }

    return Response.json({
      tickets,
      total: tickets.length
    }, { status: 200 });

  } catch (error) {
    console.error('Error obteniendo tickets:', error);
    
    if (error.message.includes('No autorizado')) {
      return Response.json(
        { error: error.message },
        { status: 401 }
      );
    }

    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const user = await authenticateUser(request);
    const { titulo, descripcion, asunto, prioridad, canal } = await request.json();

    if (!titulo || !descripcion || !asunto) {
      return Response.json(
        { error: 'Título, descripción y asunto son requeridos' },
        { status: 400 }
      );
    }

    // Sanitizar datos de entrada
    const datosLimpios = {
      titulo: sanitizeInput(titulo),
      descripcion: sanitizeInput(descripcion),
      asunto: sanitizeInput(asunto),
      prioridad: prioridad || 'Ordinaria',
      canal: canal || 'Web'
    };

    // Generar código único del ticket
    const codigoTicket = generateTicketCode();

    // Crear el ticket usando transacción
    const ticketQueries = [
      {
        sql: `INSERT INTO tickets_soporte 
              (codigo_ticket, usuario_id, titulo, descripcion, asunto, 
               prioridad, estado, canal, created_at, updated_at)
              VALUES (?, ?, ?, ?, ?, ?, 'Por asignar', ?, NOW(), NOW())`,
        params: [
          codigoTicket,
          user.id,
          datosLimpios.titulo,
          datosLimpios.descripcion,
          datosLimpios.asunto,
          datosLimpios.prioridad,
          datosLimpios.canal
        ]
      }
    ];

    const results = await transaction(ticketQueries);
    const ticketId = results[0].insertId;

    // Crear respuesta inicial automática del sistema
    await query(
      `INSERT INTO respuestas_soporte 
       (ticket_id, respondido_por, tipo_respondedor, mensaje, es_solucion, created_at)
       VALUES (?, NULL, 'Sistema', ?, FALSE, NOW())`,
      [
        ticketId,
        `Hemos recibido tu solicitud de soporte. Tu ticket ${codigoTicket} ha sido creado exitosamente y será asignado a un agente en breve. Te contactaremos pronto.`
      ]
    );

    // Obtener el ticket completo creado
    const nuevoTicket = await query(
      `SELECT 
        t.*,
        u.nombres as usuario_nombres,
        u.apellidos as usuario_apellidos,
        u.email as usuario_email
       FROM tickets_soporte t
       INNER JOIN usuarios u ON t.usuario_id = u.id
       WHERE t.id = ?`,
      [ticketId]
    );

    return Response.json({
      message: 'Ticket de soporte creado exitosamente',
      ticket: nuevoTicket[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Error creando ticket de soporte:', error);
    
    if (error.message.includes('No autorizado')) {
      return Response.json(
        { error: error.message },
        { status: 401 }
      );
    }

    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
