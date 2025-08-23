import { query } from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const estado = searchParams.get('estado') || 'TRUE';
    const limit = parseInt(searchParams.get('limit')) || null;
    const offset = parseInt(searchParams.get('offset')) || 0;

    let sql = `
      SELECT 
        i.id,
        i.nombre,
        i.descripcion,
        i.contacto_email,
        i.telefono,
        i.direccion_sede,
        i.sitio_web,
        i.logo,
        i.horario_atencion,
        i.estado,
        i.total_servicios,
        i.total_puntos_gob,
        i.fecha_registro
      FROM instituciones i 
      WHERE i.estado = ?
      ORDER BY i.nombre ASC
    `;

    const params = [estado === 'TRUE'];

    if (limit) {
      sql += ' LIMIT ? OFFSET ?';
      params.push(limit, offset);
    }

    const instituciones = await query(sql, params);

    // Para cada institución, obtener sus servicios y puntos GOB
    for (let institucion of instituciones) {
      // Obtener servicios
      const servicios = await query(
        `SELECT id, nombre, descripcion, duracion_estimada, costo, tipo_servicio 
         FROM servicios 
         WHERE institucion_id = ? AND estado = TRUE 
         ORDER BY nombre ASC`,
        [institucion.id]
      );

      // Obtener puntos GOB donde opera la institución
      const puntosGob = await query(
        `SELECT pg.id, pg.nombre, pg.ubicacion, pg.provincia, pg.municipio, pg.horario
         FROM puntos_gob pg
         INNER JOIN institucion_punto_gob ipg ON pg.id = ipg.punto_gob_id
         WHERE ipg.institucion_id = ? AND pg.estado = TRUE AND ipg.activo = TRUE
         ORDER BY pg.nombre ASC`,
        [institucion.id]
      );

      institucion.servicios = servicios;
      institucion.puntos_gob = puntosGob;
    }

    return Response.json({
      instituciones,
      total: instituciones.length
    }, { status: 200 });

  } catch (error) {
    console.error('Error obteniendo instituciones:', error);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const {
      nombre,
      descripcion,
      contacto_email,
      telefono,
      direccion_sede,
      sitio_web,
      logo,
      horario_atencion
    } = await request.json();

    if (!nombre || !descripcion || !contacto_email) {
      return Response.json(
        { error: 'Nombre, descripción y email de contacto son requeridos' },
        { status: 400 }
      );
    }

    // Verificar que no exista una institución con el mismo nombre
    const existing = await query(
      'SELECT id FROM instituciones WHERE nombre = ?',
      [nombre]
    );

    if (existing && existing.length > 0) {
      return Response.json(
        { error: 'Ya existe una institución con este nombre' },
        { status: 409 }
      );
    }

    const result = await query(
      `INSERT INTO instituciones 
       (nombre, descripcion, contacto_email, telefono, direccion_sede, 
        sitio_web, logo, horario_atencion, estado, total_servicios, 
        total_puntos_gob, fecha_registro, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, TRUE, 0, 0, NOW(), NOW(), NOW())`,
      [
        nombre,
        descripcion,
        contacto_email,
        telefono,
        direccion_sede,
        sitio_web,
        logo,
        horario_atencion
      ]
    );

    const newInstitution = await query(
      'SELECT * FROM instituciones WHERE id = ?',
      [result.insertId]
    );

    return Response.json({
      message: 'Institución creada exitosamente',
      institucion: newInstitution[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Error creando institución:', error);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
