import { query, transaction } from '@/lib/db';
import { authenticateUser } from '@/middleware/auth';
import { validateCitaData } from '@/utils/validations';
import { generateCitaNumber, generateCode } from '@/utils/auth';

export async function GET(request) {
  try {
    const user = await authenticateUser(request);
    const { searchParams } = new URL(request.url);
    const estado = searchParams.get('estado');
    const fecha_desde = searchParams.get('fecha_desde');
    const fecha_hasta = searchParams.get('fecha_hasta');

    let sql = `
      SELECT 
        c.id,
        c.numero_cita,
        c.fecha_cita,
        c.hora_cita,
        c.estado,
        c.motivo_cancelacion,
        c.observaciones,
        c.ticket_confirmacion,
        c.fecha_proceso,
        c.duracion_real,
        c.calificacion_servicio,
        c.comentario_calificacion,
        c.codigo_verificacion,
        c.created_at,
        s.nombre as servicio_nombre,
        s.descripcion as servicio_descripcion,
        s.duracion_estimada,
        s.costo as servicio_costo,
        i.nombre as institucion_nombre,
        i.contacto_email as institucion_email,
        pg.nombre as punto_gob_nombre,
        pg.direccion_completa as punto_gob_direccion,
        pg.horario as punto_gob_horario
      FROM citas c
      INNER JOIN servicios s ON c.servicio_id = s.id
      INNER JOIN instituciones i ON s.institucion_id = i.id
      INNER JOIN puntos_gob pg ON c.punto_gob_id = pg.id
      WHERE c.usuario_id = ?
    `;

    const params = [user.id];

    if (estado) {
      sql += ' AND c.estado = ?';
      params.push(estado);
    }

    if (fecha_desde) {
      sql += ' AND c.fecha_cita >= ?';
      params.push(fecha_desde);
    }

    if (fecha_hasta) {
      sql += ' AND c.fecha_cita <= ?';
      params.push(fecha_hasta);
    }

    sql += ' ORDER BY c.fecha_cita DESC, c.hora_cita DESC';

    const citas = await query(sql, params);

    return Response.json({
      citas,
      total: citas.length
    }, { status: 200 });

  } catch (error) {
    console.error('Error obteniendo citas:', error);
    
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
    const citaData = await request.json();

    // Agregar el ID del usuario autenticado
    citaData.usuario_id = user.id;

    // Validar datos de la cita
    const validation = validateCitaData(citaData);
    if (!validation.isValid) {
      return Response.json(
        { error: 'Datos de cita inválidos', details: validation.errors },
        { status: 400 }
      );
    }

    // Verificar que el servicio existe y está activo
    const servicio = await query(
      `SELECT s.*, i.nombre as institucion_nombre 
       FROM servicios s 
       INNER JOIN instituciones i ON s.institucion_id = i.id
       WHERE s.id = ? AND s.estado = TRUE AND i.estado = TRUE`,
      [citaData.servicio_id]
    );

    if (!servicio || servicio.length === 0) {
      return Response.json(
        { error: 'Servicio no encontrado o no disponible' },
        { status: 404 }
      );
    }

    // Verificar que el punto GOB existe y está activo
    const puntoGob = await query(
      'SELECT * FROM puntos_gob WHERE id = ? AND estado = TRUE',
      [citaData.punto_gob_id]
    );

    if (!puntoGob || puntoGob.length === 0) {
      return Response.json(
        { error: 'Punto GOB no encontrado o no disponible' },
        { status: 404 }
      );
    }

    // Verificar que la institución opera en el punto GOB seleccionado
    const relacionInstitucionPunto = await query(
      `SELECT * FROM institucion_punto_gob 
       WHERE institucion_id = ? AND punto_gob_id = ? AND activo = TRUE`,
      [servicio[0].institucion_id, citaData.punto_gob_id]
    );

    if (!relacionInstitucionPunto || relacionInstitucionPunto.length === 0) {
      return Response.json(
        { error: 'El servicio no está disponible en el punto GOB seleccionado' },
        { status: 400 }
      );
    }

    // Verificar que no haya conflicto de horario
    const conflictoHorario = await query(
      `SELECT id FROM citas 
       WHERE punto_gob_id = ? AND fecha_cita = ? AND hora_cita = ? 
       AND estado IN ('Activa', 'Reprogramada')`,
      [citaData.punto_gob_id, citaData.fecha_cita, citaData.hora_cita]
    );

    if (conflictoHorario && conflictoHorario.length > 0) {
      return Response.json(
        { error: 'Ya existe una cita agendada en ese horario' },
        { status: 409 }
      );
    }

    // Verificar límite de citas activas por usuario
    const citasActivas = await query(
      `SELECT COUNT(*) as total FROM citas 
       WHERE usuario_id = ? AND estado IN ('Activa', 'Reprogramada')`,
      [user.id]
    );

    const maxCitasPorUsuario = 5; // Puedes hacer esto configurable
    if (citasActivas[0].total >= maxCitasPorUsuario) {
      return Response.json(
        { error: `No puedes tener más de ${maxCitasPorUsuario} citas activas` },
        { status: 400 }
      );
    }

    // Generar códigos únicos
    const numeroCita = generateCitaNumber();
    const ticketConfirmacion = generateCode('TCK_', 8);
    const codigoVerificacion = generateCode('VER_', 6);

    // Crear la cita usando transacción
    const citaQueries = [
      {
        sql: `INSERT INTO citas 
              (numero_cita, usuario_id, servicio_id, punto_gob_id, fecha_cita, 
               hora_cita, estado, ticket_confirmacion, codigo_verificacion, 
               created_at, updated_at)
              VALUES (?, ?, ?, ?, ?, ?, 'Activa', ?, ?, NOW(), NOW())`,
        params: [
          numeroCita,
          user.id,
          citaData.servicio_id,
          citaData.punto_gob_id,
          citaData.fecha_cita,
          citaData.hora_cita,
          ticketConfirmacion,
          codigoVerificacion
        ]
      }
    ];

    const results = await transaction(citaQueries);
    const citaId = results[0].insertId;

    // Actualizar contadores
    await query(
      'UPDATE usuarios SET total_citas = total_citas + 1 WHERE id = ?',
      [user.id]
    );

    await query(
      'UPDATE servicios SET total_citas = total_citas + 1 WHERE id = ?',
      [citaData.servicio_id]
    );

    // Obtener la cita completa creada
    const nuevaCita = await query(
      `SELECT 
        c.*,
        s.nombre as servicio_nombre,
        s.descripcion as servicio_descripcion,
        i.nombre as institucion_nombre,
        pg.nombre as punto_gob_nombre,
        pg.direccion_completa as punto_gob_direccion
       FROM citas c
       INNER JOIN servicios s ON c.servicio_id = s.id
       INNER JOIN instituciones i ON s.institucion_id = i.id
       INNER JOIN puntos_gob pg ON c.punto_gob_id = pg.id
       WHERE c.id = ?`,
      [citaId]
    );

    return Response.json({
      message: 'Cita agendada exitosamente',
      cita: nuevaCita[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Error creando cita:', error);
    
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
