import { query } from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const institucion_id = searchParams.get('institucion_id');
    const punto_gob_id = searchParams.get('punto_gob_id');
    const tipo_servicio = searchParams.get('tipo_servicio');
    const estado = searchParams.get('estado') || 'TRUE';

    let sql = `
      SELECT 
        s.id,
        s.institucion_id,
        s.nombre,
        s.descripcion,
        s.requisitos,
        s.duracion_estimada,
        s.costo,
        s.tipo_servicio,
        s.documentos_requeridos,
        s.estado,
        s.disponible_online,
        s.prioridad,
        s.total_citas,
        i.nombre as institucion_nombre,
        i.descripcion as institucion_descripcion
      FROM servicios s
      INNER JOIN instituciones i ON s.institucion_id = i.id
      WHERE s.estado = ? AND i.estado = TRUE
    `;

    const params = [estado === 'TRUE'];

    if (institucion_id) {
      sql += ' AND s.institucion_id = ?';
      params.push(institucion_id);
    }

    if (tipo_servicio) {
      sql += ' AND s.tipo_servicio = ?';
      params.push(tipo_servicio);
    }

    // Si se especifica un punto GOB, filtrar solo servicios disponibles en ese punto
    if (punto_gob_id) {
      sql += ` AND EXISTS (
        SELECT 1 FROM institucion_punto_gob ipg 
        WHERE ipg.institucion_id = s.institucion_id 
        AND ipg.punto_gob_id = ? 
        AND ipg.activo = TRUE
      )`;
      params.push(punto_gob_id);
    }

    sql += ' ORDER BY s.nombre ASC';

    const servicios = await query(sql, params);

    // Para cada servicio, obtener los puntos GOB donde está disponible
    for (let servicio of servicios) {
      const puntosDisponibles = await query(
        `SELECT DISTINCT pg.id, pg.nombre, pg.ubicacion, pg.provincia, pg.municipio, pg.horario
         FROM puntos_gob pg
         INNER JOIN institucion_punto_gob ipg ON pg.id = ipg.punto_gob_id
         WHERE ipg.institucion_id = ? AND pg.estado = TRUE AND ipg.activo = TRUE
         ORDER BY pg.nombre ASC`,
        [servicio.institucion_id]
      );

      servicio.puntos_disponibles = puntosDisponibles;
    }

    return Response.json({
      servicios,
      total: servicios.length
    }, { status: 200 });

  } catch (error) {
    console.error('Error obteniendo servicios:', error);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const {
      institucion_id,
      nombre,
      descripcion,
      requisitos,
      duracion_estimada,
      costo,
      tipo_servicio,
      documentos_requeridos,
      disponible_online,
      prioridad
    } = await request.json();

    if (!institucion_id || !nombre || !descripcion) {
      return Response.json(
        { error: 'Institución, nombre y descripción son requeridos' },
        { status: 400 }
      );
    }

    // Verificar que la institución existe
    const institucion = await query(
      'SELECT id FROM instituciones WHERE id = ? AND estado = TRUE',
      [institucion_id]
    );

    if (!institucion || institucion.length === 0) {
      return Response.json(
        { error: 'Institución no encontrada' },
        { status: 404 }
      );
    }

    const result = await query(
      `INSERT INTO servicios 
       (institucion_id, nombre, descripcion, requisitos, duracion_estimada, 
        costo, tipo_servicio, documentos_requeridos, estado, disponible_online, 
        prioridad, total_citas, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, TRUE, ?, ?, 0, NOW(), NOW())`,
      [
        institucion_id,
        nombre,
        descripcion,
        requisitos,
        duracion_estimada || '30 minutos',
        costo || 0,
        tipo_servicio || 'Trámite',
        documentos_requeridos,
        disponible_online || false,
        prioridad || 'Normal'
      ]
    );

    // Actualizar contador en la institución
    await query(
      'UPDATE instituciones SET total_servicios = total_servicios + 1 WHERE id = ?',
      [institucion_id]
    );

    const newService = await query(
      `SELECT s.*, i.nombre as institucion_nombre 
       FROM servicios s 
       INNER JOIN instituciones i ON s.institucion_id = i.id 
       WHERE s.id = ?`,
      [result.insertId]
    );

    return Response.json({
      message: 'Servicio creado exitosamente',
      servicio: newService[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Error creando servicio:', error);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
