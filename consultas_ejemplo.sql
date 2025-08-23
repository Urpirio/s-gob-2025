-- =====================================================
-- CONSULTAS SQL DE EJEMPLO
-- Sistema de Citas Gubernamentales
-- =====================================================

-- Usar la base de datos
USE citas_gob;

-- =====================================================
-- 1. CONSULTAS BÁSICAS DE USUARIOS
-- =====================================================

-- Obtener todos los usuarios activos
SELECT 
    id, 
    cedula, 
    CONCAT(nombres, ' ', apellidos) AS nombre_completo,
    email,
    tipo_usuario,
    total_citas,
    fecha_registro
FROM usuarios 
WHERE estado = TRUE
ORDER BY fecha_registro DESC;

-- Buscar usuario por cédula
SELECT * FROM usuarios WHERE cedula = '402-2154340-0';

-- Usuarios más activos (con más citas)
SELECT 
    u.cedula,
    CONCAT(u.nombres, ' ', u.apellidos) AS nombre_completo,
    u.total_citas,
    COUNT(c.id) AS citas_registradas
FROM usuarios u
LEFT JOIN citas c ON u.id = c.usuario_id
WHERE u.estado = TRUE
GROUP BY u.id
ORDER BY u.total_citas DESC, citas_registradas DESC
LIMIT 10;

-- =====================================================
-- 2. CONSULTAS DE CITAS
-- =====================================================

-- Citas del día actual
SELECT 
    c.numero_cita,
    c.fecha_cita,
    c.hora_cita,
    c.estado,
    CONCAT(u.nombres, ' ', u.apellidos) AS usuario_nombre,
    s.nombre AS servicio,
    i.nombre AS institucion,
    pg.nombre AS punto_gob
FROM citas c
JOIN usuarios u ON c.usuario_id = u.id
JOIN servicios s ON c.servicio_id = s.id
JOIN instituciones i ON s.institucion_id = i.id
JOIN puntos_gob pg ON c.punto_gob_id = pg.id
WHERE DATE(c.fecha_cita) = CURDATE()
ORDER BY c.hora_cita;

-- Citas por estado
SELECT 
    estado,
    COUNT(*) as total_citas,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM citas), 2) as porcentaje
FROM citas
GROUP BY estado
ORDER BY total_citas DESC;

-- Citas de la próxima semana
SELECT 
    c.numero_cita,
    c.fecha_cita,
    c.hora_cita,
    CONCAT(u.nombres, ' ', u.apellidos) AS usuario_nombre,
    s.nombre AS servicio,
    pg.nombre AS punto_gob
FROM citas c
JOIN usuarios u ON c.usuario_id = u.id
JOIN servicios s ON c.servicio_id = s.id
JOIN puntos_gob pg ON c.punto_gob_id = pg.id
WHERE c.estado = 'Activa'
  AND c.fecha_cita BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY)
ORDER BY c.fecha_cita, c.hora_cita;

-- Historial de citas de un usuario específico
SELECT 
    c.numero_cita,
    c.fecha_cita,
    c.hora_cita,
    c.estado,
    s.nombre AS servicio,
    i.nombre AS institucion,
    pg.nombre AS punto_gob,
    c.calificacion_servicio
FROM citas c
JOIN servicios s ON c.servicio_id = s.id
JOIN instituciones i ON s.institucion_id = i.id
JOIN puntos_gob pg ON c.punto_gob_id = pg.id
WHERE c.usuario_id = 1
ORDER BY c.fecha_cita DESC, c.hora_cita DESC;

-- =====================================================
-- 3. CONSULTAS DE INSTITUCIONES Y SERVICIOS
-- =====================================================

-- Instituciones con más servicios
SELECT 
    i.nombre AS institucion,
    COUNT(s.id) AS total_servicios,
    COUNT(DISTINCT ipg.punto_gob_id) AS puntos_gob_disponibles,
    i.contacto_email
FROM instituciones i
LEFT JOIN servicios s ON i.id = s.institucion_id AND s.estado = TRUE
LEFT JOIN institucion_punto_gob ipg ON i.id = ipg.institucion_id AND ipg.activo = TRUE
WHERE i.estado = TRUE
GROUP BY i.id
ORDER BY total_servicios DESC;

-- Servicios más solicitados
SELECT 
    s.nombre AS servicio,
    i.nombre AS institucion,
    COUNT(c.id) AS total_citas,
    AVG(c.calificacion_servicio) AS calificacion_promedio,
    s.duracion_estimada
FROM servicios s
JOIN instituciones i ON s.institucion_id = i.id
LEFT JOIN citas c ON s.id = c.servicio_id
WHERE s.estado = TRUE
GROUP BY s.id
ORDER BY total_citas DESC;

-- Servicios disponibles en un punto GOB específico
SELECT DISTINCT
    s.nombre AS servicio,
    i.nombre AS institucion,
    s.descripcion,
    s.duracion_estimada,
    s.costo
FROM servicios s
JOIN instituciones i ON s.institucion_id = i.id
JOIN institucion_punto_gob ipg ON i.id = ipg.institucion_id
WHERE ipg.punto_gob_id = 1  -- Cambiar por ID del punto GOB
  AND s.estado = TRUE
  AND ipg.activo = TRUE
ORDER BY i.nombre, s.nombre;

-- =====================================================
-- 4. CONSULTAS DE PUNTOS GOB
-- =====================================================

-- Capacidad actual de todos los puntos GOB
SELECT 
    pg.nombre,
    pg.ubicacion,
    pg.capacidad_maxima,
    pg.capacidad_actual,
    ROUND((pg.capacidad_actual * 100.0 / pg.capacidad_maxima), 2) AS porcentaje_ocupacion,
    COUNT(DISTINCT ipg.institucion_id) AS instituciones_presentes
FROM puntos_gob pg
LEFT JOIN institucion_punto_gob ipg ON pg.id = ipg.punto_gob_id AND ipg.activo = TRUE
WHERE pg.estado = TRUE
GROUP BY pg.id
ORDER BY porcentaje_ocupacion DESC;

-- Citas por punto GOB en el último mes
SELECT 
    pg.nombre AS punto_gob,
    pg.ubicacion,
    COUNT(c.id) AS total_citas_mes,
    COUNT(CASE WHEN c.estado = 'Procesada' THEN 1 END) AS citas_procesadas,
    COUNT(CASE WHEN c.estado = 'Cancelada' THEN 1 END) AS citas_canceladas
FROM puntos_gob pg
LEFT JOIN citas c ON pg.id = c.punto_gob_id 
  AND c.fecha_cita >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
WHERE pg.estado = TRUE
GROUP BY pg.id
ORDER BY total_citas_mes DESC;

-- =====================================================
-- 5. CONSULTAS DE SOPORTE TÉCNICO
-- =====================================================

-- Tickets abiertos por prioridad
SELECT 
    prioridad,
    COUNT(*) AS total_tickets,
    AVG(DATEDIFF(CURDATE(), DATE(created_at))) AS dias_promedio_abierto
FROM tickets_soporte
WHERE estado IN ('Por asignar', 'Abierto', 'En progreso')
GROUP BY prioridad
ORDER BY FIELD(prioridad, 'Urgente', 'Prioritaria', 'Ordinaria');

-- Tickets por administrador asignado
SELECT 
    CONCAT(a.nombres, ' ', a.apellidos) AS administrador,
    COUNT(t.id) AS tickets_asignados,
    COUNT(CASE WHEN t.estado = 'Cerrado' THEN 1 END) AS tickets_cerrados,
    AVG(t.tiempo_resolucion) AS tiempo_promedio_resolucion_min
FROM administradores a
LEFT JOIN tickets_soporte t ON a.id = t.asignado_a
WHERE a.rol = 'Soporte TI' AND a.estado = TRUE
GROUP BY a.id
ORDER BY tickets_asignados DESC;

-- =====================================================
-- 6. ESTADÍSTICAS Y REPORTES
-- =====================================================

-- Resumen general del sistema
SELECT 
    'Usuarios Registrados' AS metrica, 
    COUNT(*) AS valor 
FROM usuarios WHERE estado = TRUE
UNION ALL
SELECT 
    'Citas Este Mes', 
    COUNT(*) 
FROM citas WHERE MONTH(fecha_cita) = MONTH(CURDATE()) AND YEAR(fecha_cita) = YEAR(CURDATE())
UNION ALL
SELECT 
    'Instituciones Activas', 
    COUNT(*) 
FROM instituciones WHERE estado = TRUE
UNION ALL
SELECT 
    'Puntos GOB Operativos', 
    COUNT(*) 
FROM puntos_gob WHERE estado = TRUE
UNION ALL
SELECT 
    'Tickets Abiertos', 
    COUNT(*) 
FROM tickets_soporte WHERE estado IN ('Por asignar', 'Abierto', 'En progreso')
UNION ALL
SELECT 
    'Servicios Disponibles', 
    COUNT(*) 
FROM servicios WHERE estado = TRUE;

-- Citas por día de la semana (último mes)
SELECT 
    DAYNAME(fecha_cita) AS dia_semana,
    COUNT(*) AS total_citas,
    COUNT(CASE WHEN estado = 'Procesada' THEN 1 END) AS citas_exitosas
FROM citas
WHERE fecha_cita >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
GROUP BY DAYOFWEEK(fecha_cita), DAYNAME(fecha_cita)
ORDER BY DAYOFWEEK(fecha_cita);

-- Tendencia de registros de usuarios por mes
SELECT 
    YEAR(fecha_registro) AS año,
    MONTH(fecha_registro) AS mes,
    MONTHNAME(fecha_registro) AS nombre_mes,
    COUNT(*) AS usuarios_registrados
FROM usuarios
WHERE fecha_registro >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
GROUP BY YEAR(fecha_registro), MONTH(fecha_registro)
ORDER BY año, mes;

-- =====================================================
-- 7. CONSULTAS DE ANÁLISIS AVANZADO
-- =====================================================

-- Servicios con mayor tiempo de resolución
SELECT 
    s.nombre AS servicio,
    i.nombre AS institucion,
    s.duracion_estimada,
    AVG(TIME_TO_SEC(c.duracion_real)/60) AS duracion_real_promedio_min,
    COUNT(c.id) AS total_citas_procesadas
FROM servicios s
JOIN instituciones i ON s.institucion_id = i.id
LEFT JOIN citas c ON s.id = c.servicio_id AND c.estado = 'Procesada' AND c.duracion_real IS NOT NULL
GROUP BY s.id
HAVING total_citas_procesadas > 0
ORDER BY duracion_real_promedio_min DESC;

-- Usuarios que no se han presentado a citas (múltiples faltas)
SELECT 
    u.cedula,
    CONCAT(u.nombres, ' ', u.apellidos) AS nombre_completo,
    u.email,
    COUNT(c.id) AS total_faltas,
    MAX(c.fecha_cita) AS ultima_falta
FROM usuarios u
JOIN citas c ON u.id = c.usuario_id
WHERE c.estado = 'Fallida'
GROUP BY u.id
HAVING total_faltas >= 2
ORDER BY total_faltas DESC, ultima_falta DESC;

-- Horarios más demandados
SELECT 
    HOUR(hora_cita) AS hora,
    COUNT(*) AS total_citas,
    COUNT(CASE WHEN estado = 'Procesada' THEN 1 END) AS citas_exitosas,
    ROUND(COUNT(CASE WHEN estado = 'Procesada' THEN 1 END) * 100.0 / COUNT(*), 2) AS porcentaje_exito
FROM citas
WHERE fecha_cita >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
GROUP BY HOUR(hora_cita)
ORDER BY total_citas DESC;

-- =====================================================
-- 8. CONSULTAS PARA OPTIMIZACIÓN
-- =====================================================

-- Identificar puntos GOB sobrecargados
SELECT 
    pg.nombre,
    pg.ubicacion,
    pg.capacidad_maxima,
    COUNT(c.id) AS citas_programadas_hoy,
    CASE 
        WHEN COUNT(c.id) > pg.capacidad_maxima * 0.8 THEN 'SOBRECARGADO'
        WHEN COUNT(c.id) > pg.capacidad_maxima * 0.6 THEN 'ALTO'
        WHEN COUNT(c.id) > pg.capacidad_maxima * 0.3 THEN 'MEDIO'
        ELSE 'BAJO'
    END AS nivel_carga
FROM puntos_gob pg
LEFT JOIN citas c ON pg.id = c.punto_gob_id 
  AND DATE(c.fecha_cita) = CURDATE() 
  AND c.estado = 'Activa'
WHERE pg.estado = TRUE
GROUP BY pg.id
ORDER BY citas_programadas_hoy DESC;

-- Instituciones que necesitan más puntos GOB
SELECT 
    i.nombre AS institucion,
    COUNT(DISTINCT ipg.punto_gob_id) AS puntos_actuales,
    COUNT(c.id) AS total_citas_historicas,
    ROUND(COUNT(c.id) / COUNT(DISTINCT ipg.punto_gob_id), 2) AS citas_por_punto
FROM instituciones i
LEFT JOIN institucion_punto_gob ipg ON i.id = ipg.institucion_id AND ipg.activo = TRUE
LEFT JOIN servicios s ON i.id = s.institucion_id
LEFT JOIN citas c ON s.id = c.servicio_id
WHERE i.estado = TRUE
GROUP BY i.id
HAVING puntos_actuales > 0
ORDER BY citas_por_punto DESC;

-- =====================================================
-- 9. CONSULTAS USANDO VISTAS PREDEFINIDAS
-- =====================================================

-- Usar la vista de citas completa
SELECT * FROM vista_citas_completa 
WHERE fecha_cita = CURDATE() 
ORDER BY hora_cita;

-- Usar la vista de estadísticas de instituciones
SELECT * FROM vista_estadisticas_instituciones 
ORDER BY total_citas DESC;

-- =====================================================
-- 10. CONSULTAS DE MANTENIMIENTO
-- =====================================================

-- Limpiar notificaciones leídas antiguas (más de 30 días)
-- DELETE FROM notificaciones 
-- WHERE leida = TRUE 
--   AND fecha_lectura < DATE_SUB(CURDATE(), INTERVAL 30 DAY);

-- Actualizar contadores de instituciones
-- UPDATE instituciones i 
-- SET total_servicios = (
--     SELECT COUNT(*) FROM servicios s 
--     WHERE s.institucion_id = i.id AND s.estado = TRUE
-- );

-- Verificar integridad de datos
SELECT 
    'Citas sin usuario' AS problema,
    COUNT(*) AS cantidad
FROM citas c
LEFT JOIN usuarios u ON c.usuario_id = u.id
WHERE u.id IS NULL
UNION ALL
SELECT 
    'Servicios sin institución',
    COUNT(*)
FROM servicios s
LEFT JOIN instituciones i ON s.institucion_id = i.id
WHERE i.id IS NULL
UNION ALL
SELECT 
    'Tickets sin usuario ni admin',
    COUNT(*)
FROM tickets_soporte t
WHERE t.usuario_id IS NULL AND t.administrador_id IS NULL;

-- =====================================================
-- CONSULTAS DE EJEMPLO FINALIZADAS
-- =====================================================

-- Estas consultas proporcionan una base sólida para:
-- 1. Operaciones diarias del sistema
-- 2. Reportes y estadísticas
-- 3. Análisis de rendimiento
-- 4. Identificación de problemas
-- 5. Optimización del sistema
-- 6. Mantenimiento de la base de datos

-- Para ejecutar consultas específicas, descomenta y modifica
-- los parámetros según tus necesidades.
