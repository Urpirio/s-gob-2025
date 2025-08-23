import { query } from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const provincia = searchParams.get('provincia');
    const municipio = searchParams.get('municipio');
    const estado = searchParams.get('estado') || 'TRUE';

    let sql = `
      SELECT 
        pg.id,
        pg.nombre,
        pg.ubicacion,
        pg.direccion_completa,
        pg.provincia,
        pg.municipio,
        pg.capacidad_maxima,
        pg.capacidad_actual,
        pg.horario,
        pg.telefono,
        pg.coordenadas_lat,
        pg.coordenadas_lng,
        pg.estado,
        pg.total_instituciones,
        pg.fecha_apertura
      FROM puntos_gob pg
      WHERE pg.estado = ?
    `;

    const params = [estado === 'TRUE'];

    if (provincia) {
      sql += ' AND pg.provincia = ?';
      params.push(provincia);
    }

    if (municipio) {
      sql += ' AND pg.municipio = ?';
      params.push(municipio);
    }

    sql += ' ORDER BY pg.nombre ASC';

    const puntosGob = await query(sql, params);

    // Para cada punto GOB, obtener las instituciones que operan allí
    for (let punto of puntosGob) {
      const instituciones = await query(
        `SELECT DISTINCT i.id, i.nombre, i.descripcion, i.contacto_email, i.horario_atencion
         FROM instituciones i
         INNER JOIN institucion_punto_gob ipg ON i.id = ipg.institucion_id
         WHERE ipg.punto_gob_id = ? AND i.estado = TRUE AND ipg.activo = TRUE
         ORDER BY i.nombre ASC`,
        [punto.id]
      );

      // Para cada institución, obtener sus servicios disponibles en este punto
      for (let institucion of instituciones) {
        const servicios = await query(
          `SELECT s.id, s.nombre, s.descripcion, s.duracion_estimada, s.costo, s.tipo_servicio
           FROM servicios s
           WHERE s.institucion_id = ? AND s.estado = TRUE
           ORDER BY s.nombre ASC`,
          [institucion.id]
        );
        institucion.servicios = servicios;
      }

      punto.instituciones = instituciones;

      // Calcular porcentaje de ocupación
      punto.porcentaje_ocupacion = punto.capacidad_maxima > 0 
        ? Math.round((punto.capacidad_actual / punto.capacidad_maxima) * 100) 
        : 0;
    }

    return Response.json({
      puntos_gob: puntosGob,
      total: puntosGob.length
    }, { status: 200 });

  } catch (error) {
    console.error('Error obteniendo puntos GOB:', error);
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
      ubicacion,
      direccion_completa,
      provincia,
      municipio,
      capacidad_maxima,
      horario,
      telefono,
      coordenadas_lat,
      coordenadas_lng
    } = await request.json();

    if (!nombre || !ubicacion || !direccion_completa || !provincia || !municipio) {
      return Response.json(
        { error: 'Nombre, ubicación, dirección, provincia y municipio son requeridos' },
        { status: 400 }
      );
    }

    // Verificar que no exista un punto GOB con el mismo nombre
    const existing = await query(
      'SELECT id FROM puntos_gob WHERE nombre = ?',
      [nombre]
    );

    if (existing && existing.length > 0) {
      return Response.json(
        { error: 'Ya existe un punto GOB con este nombre' },
        { status: 409 }
      );
    }

    const result = await query(
      `INSERT INTO puntos_gob 
       (nombre, ubicacion, direccion_completa, provincia, municipio, 
        capacidad_maxima, capacidad_actual, horario, telefono, 
        coordenadas_lat, coordenadas_lng, estado, total_instituciones, 
        fecha_apertura, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, TRUE, 0, NOW(), NOW(), NOW())`,
      [
        nombre,
        ubicacion,
        direccion_completa,
        provincia,
        municipio,
        capacidad_maxima || 1000,
        horario || 'Lunes a Viernes - 8am - 5pm',
        telefono,
        coordenadas_lat,
        coordenadas_lng
      ]
    );

    const newPuntoGob = await query(
      'SELECT * FROM puntos_gob WHERE id = ?',
      [result.insertId]
    );

    return Response.json({
      message: 'Punto GOB creado exitosamente',
      punto_gob: newPuntoGob[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Error creando punto GOB:', error);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
