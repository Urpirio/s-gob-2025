import { query, transaction } from '@/lib/db';
import { authenticateUser } from '@/middleware/auth';

export async function GET(request, { params }) {
  try {
    const user = await authenticateUser(request);
    const { id } = await params;

    const cita = await query(
      `SELECT 
        c.*,
        s.nombre as servicio_nombre,
        s.descripcion as servicio_descripcion,
        s.duracion_estimada,
        s.costo as servicio_costo,
        i.nombre as institucion_nombre,
        i.contacto_email as institucion_email,
        pg.nombre as punto_gob_nombre,
        pg.direccion_completa as punto_gob_direccion,
        pg.horario as punto_gob_horario,
        u.nombres as usuario_nombres,
        u.apellidos as usuario_apellidos,
        u.email as usuario_email,
        u.telefono as usuario_telefono
      FROM citas c
      INNER JOIN servicios s ON c.servicio_id = s.id
      INNER JOIN instituciones i ON s.institucion_id = i.id
      INNER JOIN puntos_gob pg ON c.punto_gob_id = pg.id
      INNER JOIN usuarios u ON c.usuario_id = u.id
      WHERE c.id = ? AND c.usuario_id = ?`,
      [id, user.id]
    );

    if (!cita || cita.length === 0) {
      return Response.json(
        { error: 'Cita no encontrada' },
        { status: 404 }
      );
    }

    return Response.json({
      cita: cita[0]
    }, { status: 200 });

  } catch (error) {
    console.error('Error obteniendo cita:', error);
    
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

export async function PUT(request, { params }) {
  try {
    const user = await authenticateUser(request);
    const { id } = await params;
    const { accion, motivo, calificacion, comentario } = await request.json();

    // Verificar que la cita existe y pertenece al usuario
    const cita = await query(
      'SELECT * FROM citas WHERE id = ? AND usuario_id = ?',
      [id, user.id]
    );

    if (!cita || cita.length === 0) {
      return Response.json(
        { error: 'Cita no encontrada' },
        { status: 404 }
      );
    }

    const citaActual = cita[0];

    if (accion === 'cancelar') {
      // Solo se pueden cancelar citas activas o reprogramadas
      if (!['Activa', 'Reprogramada'].includes(citaActual.estado)) {
        return Response.json(
          { error: 'Solo se pueden cancelar citas activas o reprogramadas' },
          { status: 400 }
        );
      }

      // Usar transacción para cancelar la cita y registrar en historial
      const cancelarQueries = [
        {
          sql: 'UPDATE citas SET estado = ?, motivo_cancelacion = ?, updated_at = NOW() WHERE id = ?',
          params: ['Cancelada', motivo || 'Cancelada por el usuario', id]
        },
        {
          sql: `INSERT INTO historial_citas 
                (cita_id, estado_anterior, estado_nuevo, motivo_cambio, 
                 modificado_por, tipo_modificador, created_at)
                VALUES (?, ?, ?, ?, ?, ?, NOW())`,
          params: [
            id, 
            citaActual.estado, 
            'Cancelada', 
            motivo || 'Cancelada por el usuario',
            user.id,
            'Usuario'
          ]
        }
      ];

      await transaction(cancelarQueries);

      return Response.json({
        message: 'Cita cancelada exitosamente'
      }, { status: 200 });

    } else if (accion === 'calificar') {
      // Solo se pueden calificar citas procesadas
      if (citaActual.estado !== 'Procesada') {
        return Response.json(
          { error: 'Solo se pueden calificar citas que han sido procesadas' },
          { status: 400 }
        );
      }

      if (!calificacion || calificacion < 1 || calificacion > 5) {
        return Response.json(
          { error: 'La calificación debe ser entre 1 y 5' },
          { status: 400 }
        );
      }

      await query(
        'UPDATE citas SET calificacion_servicio = ?, comentario_calificacion = ?, updated_at = NOW() WHERE id = ?',
        [calificacion, comentario || '', id]
      );

      return Response.json({
        message: 'Calificación registrada exitosamente'
      }, { status: 200 });

    } else {
      return Response.json(
        { error: 'Acción no válida' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Error actualizando cita:', error);
    
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
