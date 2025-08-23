-- =====================================================
-- SISTEMA DE CITAS GUBERNAMENTALES
-- Base de datos para XAMPP/MySQL
-- =====================================================

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS citas_gob 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE citas_gob;

-- =====================================================
-- TABLA: usuarios
-- Gestiona los ciudadanos registrados en el sistema
-- =====================================================
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cedula VARCHAR(15) UNIQUE NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    sexo ENUM('Masculino', 'Femenino', 'Otro'),
    direccion TEXT,
    fecha_nacimiento DATE,
    password_hash VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Nuevo', 'Recurrente', 'Inhabilitado') DEFAULT 'Nuevo',
    estado BOOLEAN DEFAULT TRUE,
    foto_perfil VARCHAR(255),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultimo_acceso TIMESTAMP NULL,
    total_citas INT DEFAULT 0,
    verificado BOOLEAN DEFAULT FALSE,
    token_verificacion VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_cedula (cedula),
    INDEX idx_email (email),
    INDEX idx_tipo_usuario (tipo_usuario),
    INDEX idx_estado (estado)
);

-- =====================================================
-- TABLA: instituciones
-- Organismos gubernamentales que ofrecen servicios
-- =====================================================
CREATE TABLE instituciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    contacto_email VARCHAR(150) NOT NULL,
    telefono VARCHAR(20),
    direccion_sede TEXT,
    sitio_web VARCHAR(255),
    logo VARCHAR(255),
    horario_atencion VARCHAR(100),
    estado BOOLEAN DEFAULT TRUE,
    total_servicios INT DEFAULT 0,
    total_puntos_gob INT DEFAULT 0,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_nombre (nombre),
    INDEX idx_estado (estado)
);

-- =====================================================
-- TABLA: puntos_gob
-- Ubicaciones físicas donde se brindan servicios
-- =====================================================
CREATE TABLE puntos_gob (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    ubicacion VARCHAR(200) NOT NULL,
    direccion_completa TEXT,
    provincia VARCHAR(50),
    municipio VARCHAR(50),
    capacidad_maxima INT NOT NULL DEFAULT 1500,
    capacidad_actual INT DEFAULT 0,
    horario VARCHAR(100) DEFAULT 'Lunes a Viernes - 8am - 7pm',
    telefono VARCHAR(20),
    coordenadas_lat DECIMAL(10, 8),
    coordenadas_lng DECIMAL(11, 8),
    estado BOOLEAN DEFAULT TRUE,
    total_instituciones INT DEFAULT 0,
    fecha_apertura DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_ubicacion (ubicacion),
    INDEX idx_provincia (provincia),
    INDEX idx_estado (estado)
);

-- =====================================================
-- TABLA: servicios
-- Trámites específicos que ofrecen las instituciones
-- =====================================================
CREATE TABLE servicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    institucion_id INT NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    requisitos TEXT,
    duracion_estimada VARCHAR(50),
    costo DECIMAL(10, 2) DEFAULT 0.00,
    tipo_servicio VARCHAR(100),
    documentos_requeridos TEXT,
    estado BOOLEAN DEFAULT TRUE,
    disponible_online BOOLEAN DEFAULT FALSE,
    prioridad ENUM('Baja', 'Media', 'Alta') DEFAULT 'Media',
    total_citas INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (institucion_id) REFERENCES instituciones(id) ON DELETE CASCADE,
    INDEX idx_institucion (institucion_id),
    INDEX idx_nombre (nombre),
    INDEX idx_estado (estado),
    INDEX idx_tipo_servicio (tipo_servicio)
);

-- =====================================================
-- TABLA: institucion_punto_gob
-- Relación many-to-many entre instituciones y puntos GOB
-- =====================================================
CREATE TABLE institucion_punto_gob (
    id INT PRIMARY KEY AUTO_INCREMENT,
    institucion_id INT NOT NULL,
    punto_gob_id INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NULL,
    activo BOOLEAN DEFAULT TRUE,
    horario_especifico VARCHAR(100),
    capacidad_asignada INT DEFAULT 50,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (institucion_id) REFERENCES instituciones(id) ON DELETE CASCADE,
    FOREIGN KEY (punto_gob_id) REFERENCES puntos_gob(id) ON DELETE CASCADE,
    UNIQUE KEY unique_institucion_punto (institucion_id, punto_gob_id),
    INDEX idx_institucion (institucion_id),
    INDEX idx_punto_gob (punto_gob_id)
);

-- =====================================================
-- TABLA: citas
-- Agendamientos de servicios por parte de usuarios
-- =====================================================
CREATE TABLE citas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero_cita VARCHAR(20) UNIQUE NOT NULL,
    usuario_id INT NOT NULL,
    servicio_id INT NOT NULL,
    punto_gob_id INT NOT NULL,
    fecha_cita DATE NOT NULL,
    hora_cita TIME NOT NULL,
    estado ENUM('Activa', 'Procesada', 'Cancelada', 'Fallida', 'Reprogramada') DEFAULT 'Activa',
    motivo_cancelacion TEXT NULL,
    observaciones TEXT,
    ticket_confirmacion VARCHAR(50),
    fecha_procesamiento TIMESTAMP NULL,
    usuario_atencion VARCHAR(100),
    duracion_real TIME NULL,
    calificacion_servicio TINYINT CHECK (calificacion_servicio BETWEEN 1 AND 5),
    comentario_calificacion TEXT,
    recordatorio_enviado BOOLEAN DEFAULT FALSE,
    codigo_verificacion VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (servicio_id) REFERENCES servicios(id) ON DELETE CASCADE,
    FOREIGN KEY (punto_gob_id) REFERENCES puntos_gob(id) ON DELETE CASCADE,
    INDEX idx_numero_cita (numero_cita),
    INDEX idx_usuario (usuario_id),
    INDEX idx_servicio (servicio_id),
    INDEX idx_punto_gob (punto_gob_id),
    INDEX idx_fecha_cita (fecha_cita),
    INDEX idx_estado (estado),
    INDEX idx_fecha_hora (fecha_cita, hora_cita)
);

-- =====================================================
-- TABLA: administradores
-- Personal que administra el sistema
-- =====================================================
CREATE TABLE administradores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cedula VARCHAR(15) UNIQUE NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    rol ENUM('Super Admin', 'Admin Institución', 'Admin Punto GOB', 'Soporte TI') NOT NULL,
    institucion_id INT NULL,
    punto_gob_id INT NULL,
    estado BOOLEAN DEFAULT TRUE,
    foto_perfil VARCHAR(255),
    ultimo_acceso TIMESTAMP NULL,
    permisos JSON,
    fecha_contratacion DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (institucion_id) REFERENCES instituciones(id) ON DELETE SET NULL,
    FOREIGN KEY (punto_gob_id) REFERENCES puntos_gob(id) ON DELETE SET NULL,
    INDEX idx_cedula (cedula),
    INDEX idx_email (email),
    INDEX idx_rol (rol),
    INDEX idx_estado (estado)
);

-- =====================================================
-- TABLA: tickets_soporte
-- Sistema de soporte técnico
-- =====================================================
CREATE TABLE tickets_soporte (
    id INT PRIMARY KEY AUTO_INCREMENT,
    codigo_ticket VARCHAR(20) UNIQUE NOT NULL,
    usuario_id INT NULL,
    administrador_id INT NULL,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    asunto ENUM('Problema técnico', 'Consulta general', 'Error en cita', 'Problema de acceso', 'Otro') NOT NULL,
    prioridad ENUM('Ordinaria', 'Prioritaria', 'Urgente') DEFAULT 'Ordinaria',
    estado ENUM('Por asignar', 'Abierto', 'En progreso', 'Escalado', 'Cerrado') DEFAULT 'Por asignar',
    canal ENUM('Web', 'Email', 'Teléfono', 'Presencial') DEFAULT 'Web',
    asignado_a INT NULL,
    fecha_cierre TIMESTAMP NULL,
    tiempo_resolucion INT NULL, -- en minutos
    satisfaccion TINYINT CHECK (satisfaccion BETWEEN 1 AND 5),
    comentario_cierre TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (administrador_id) REFERENCES administradores(id) ON DELETE SET NULL,
    FOREIGN KEY (asignado_a) REFERENCES administradores(id) ON DELETE SET NULL,
    INDEX idx_codigo_ticket (codigo_ticket),
    INDEX idx_usuario (usuario_id),
    INDEX idx_estado (estado),
    INDEX idx_prioridad (prioridad),
    INDEX idx_asignado (asignado_a),
    INDEX idx_fecha_creacion (created_at)
);

-- =====================================================
-- TABLA: respuestas_soporte
-- Respuestas a tickets de soporte
-- =====================================================
CREATE TABLE respuestas_soporte (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ticket_id INT NOT NULL,
    respondido_por INT NOT NULL,
    tipo_respondedor ENUM('Usuario', 'Administrador') NOT NULL,
    mensaje TEXT NOT NULL,
    archivo_adjunto VARCHAR(255) NULL,
    es_solucion BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (ticket_id) REFERENCES tickets_soporte(id) ON DELETE CASCADE,
    FOREIGN KEY (respondido_por) REFERENCES administradores(id) ON DELETE CASCADE,
    INDEX idx_ticket (ticket_id),
    INDEX idx_respondido_por (respondido_por),
    INDEX idx_fecha (created_at)
);

-- =====================================================
-- TABLA: historial_citas
-- Historial detallado de cambios en citas
-- =====================================================
CREATE TABLE historial_citas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cita_id INT NOT NULL,
    estado_anterior ENUM('Activa', 'Procesada', 'Cancelada', 'Fallida', 'Reprogramada'),
    estado_nuevo ENUM('Activa', 'Procesada', 'Cancelada', 'Fallida', 'Reprogramada'),
    fecha_anterior DATE NULL,
    hora_anterior TIME NULL,
    fecha_nueva DATE NULL,
    hora_nueva TIME NULL,
    motivo_cambio TEXT,
    modificado_por INT NULL,
    tipo_modificador ENUM('Usuario', 'Administrador', 'Sistema') DEFAULT 'Sistema',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (cita_id) REFERENCES citas(id) ON DELETE CASCADE,
    FOREIGN KEY (modificado_por) REFERENCES administradores(id) ON DELETE SET NULL,
    INDEX idx_cita (cita_id),
    INDEX idx_fecha_cambio (created_at)
);

-- =====================================================
-- TABLA: notificaciones
-- Sistema de notificaciones para usuarios
-- =====================================================
CREATE TABLE notificaciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    tipo ENUM('Recordatorio cita', 'Confirmación cita', 'Cancelación', 'Información general', 'Soporte') NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    mensaje TEXT NOT NULL,
    leida BOOLEAN DEFAULT FALSE,
    enviada_por ENUM('Sistema', 'Administrador') DEFAULT 'Sistema',
    cita_id INT NULL,
    canal ENUM('Web', 'Email', 'SMS', 'Push') DEFAULT 'Web',
    fecha_envio TIMESTAMP NULL,
    fecha_lectura TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (cita_id) REFERENCES citas(id) ON DELETE SET NULL,
    INDEX idx_usuario (usuario_id),
    INDEX idx_tipo (tipo),
    INDEX idx_leida (leida),
    INDEX idx_fecha_envio (fecha_envio)
);

-- =====================================================
-- TABLA: configuraciones_sistema
-- Configuraciones generales del sistema
-- =====================================================
CREATE TABLE configuraciones_sistema (
    id INT PRIMARY KEY AUTO_INCREMENT,
    clave VARCHAR(100) UNIQUE NOT NULL,
    valor TEXT NOT NULL,
    descripcion TEXT,
    tipo ENUM('String', 'Number', 'Boolean', 'JSON') DEFAULT 'String',
    categoria VARCHAR(50) DEFAULT 'General',
    modificado_por INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (modificado_por) REFERENCES administradores(id) ON DELETE SET NULL,
    INDEX idx_clave (clave),
    INDEX idx_categoria (categoria)
);

-- =====================================================
-- TABLA: horarios_disponibles
-- Gestión de horarios disponibles por servicio y punto GOB
-- =====================================================
CREATE TABLE horarios_disponibles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    servicio_id INT NOT NULL,
    punto_gob_id INT NOT NULL,
    dia_semana TINYINT NOT NULL CHECK (dia_semana BETWEEN 1 AND 7), -- 1=Lunes, 7=Domingo
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    intervalo_minutos INT DEFAULT 30,
    cupos_disponibles INT DEFAULT 10,
    activo BOOLEAN DEFAULT TRUE,
    fecha_inicio_vigencia DATE NOT NULL,
    fecha_fin_vigencia DATE NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (servicio_id) REFERENCES servicios(id) ON DELETE CASCADE,
    FOREIGN KEY (punto_gob_id) REFERENCES puntos_gob(id) ON DELETE CASCADE,
    INDEX idx_servicio_punto (servicio_id, punto_gob_id),
    INDEX idx_dia_semana (dia_semana),
    INDEX idx_activo (activo)
);

-- =====================================================
-- VISTA: vista_citas_completa
-- Vista con información completa de citas
-- =====================================================
CREATE VIEW vista_citas_completa AS
SELECT 
    c.id,
    c.numero_cita,
    c.fecha_cita,
    c.hora_cita,
    c.estado,
    c.ticket_confirmacion,
    u.cedula AS usuario_cedula,
    CONCAT(u.nombres, ' ', u.apellidos) AS usuario_nombre,
    u.email AS usuario_email,
    u.telefono AS usuario_telefono,
    s.nombre AS servicio_nombre,
    s.descripcion AS servicio_descripcion,
    s.duracion_estimada,
    i.nombre AS institucion_nombre,
    i.contacto_email AS institucion_email,
    pg.nombre AS punto_gob_nombre,
    pg.ubicacion AS punto_gob_ubicacion,
    pg.direccion_completa AS punto_gob_direccion,
    c.created_at AS fecha_creacion,
    c.updated_at AS fecha_actualizacion
FROM citas c
JOIN usuarios u ON c.usuario_id = u.id
JOIN servicios s ON c.servicio_id = s.id
JOIN instituciones i ON s.institucion_id = i.id
JOIN puntos_gob pg ON c.punto_gob_id = pg.id;

-- =====================================================
-- VISTA: vista_estadisticas_instituciones
-- Estadísticas por institución
-- =====================================================
CREATE VIEW vista_estadisticas_instituciones AS
SELECT 
    i.id,
    i.nombre AS institucion_nombre,
    COUNT(DISTINCT s.id) AS total_servicios,
    COUNT(DISTINCT ipg.punto_gob_id) AS total_puntos_gob,
    COUNT(DISTINCT c.id) AS total_citas,
    COUNT(CASE WHEN c.estado = 'Activa' THEN 1 END) AS citas_activas,
    COUNT(CASE WHEN c.estado = 'Procesada' THEN 1 END) AS citas_procesadas,
    COUNT(CASE WHEN c.estado = 'Cancelada' THEN 1 END) AS citas_canceladas,
    AVG(c.calificacion_servicio) AS calificacion_promedio
FROM instituciones i
LEFT JOIN servicios s ON i.id = s.institucion_id
LEFT JOIN institucion_punto_gob ipg ON i.id = ipg.institucion_id
LEFT JOIN citas c ON s.id = c.servicio_id
WHERE i.estado = TRUE
GROUP BY i.id, i.nombre;

-- =====================================================
-- TRIGGERS
-- =====================================================

-- Trigger para actualizar total_citas en usuarios
DELIMITER $$
CREATE TRIGGER actualizar_total_citas_usuario
    AFTER INSERT ON citas
    FOR EACH ROW
BEGIN
    UPDATE usuarios 
    SET total_citas = (
        SELECT COUNT(*) 
        FROM citas 
        WHERE usuario_id = NEW.usuario_id
    )
    WHERE id = NEW.usuario_id;
END$$

-- Trigger para generar número de cita automático
CREATE TRIGGER generar_numero_cita
    BEFORE INSERT ON citas
    FOR EACH ROW
BEGIN
    IF NEW.numero_cita IS NULL OR NEW.numero_cita = '' THEN
        SET NEW.numero_cita = CONCAT('CITA-', YEAR(CURDATE()), '-', LPAD(FLOOR(RAND() * 999999), 6, '0'));
    END IF;
END$$

-- Trigger para generar código de ticket automático
CREATE TRIGGER generar_codigo_ticket
    BEFORE INSERT ON tickets_soporte
    FOR EACH ROW
BEGIN
    IF NEW.codigo_ticket IS NULL OR NEW.codigo_ticket = '' THEN
        SET NEW.codigo_ticket = CONCAT('TKT-', YEAR(CURDATE()), '-', LPAD(FLOOR(RAND() * 99999), 5, '0'));
    END IF;
END$$

DELIMITER ;

-- =====================================================
-- ÍNDICES ADICIONALES PARA OPTIMIZACIÓN
-- =====================================================

-- Índices compuestos para consultas frecuentes
CREATE INDEX idx_citas_fecha_estado ON citas(fecha_cita, estado);
CREATE INDEX idx_citas_usuario_estado ON citas(usuario_id, estado);
CREATE INDEX idx_servicios_institucion_estado ON servicios(institucion_id, estado);
CREATE INDEX idx_tickets_estado_prioridad ON tickets_soporte(estado, prioridad);

-- =====================================================
-- DATOS INICIALES DE CONFIGURACIÓN
-- =====================================================

-- Configuraciones del sistema
INSERT INTO configuraciones_sistema (clave, valor, descripcion, tipo, categoria) VALUES
('sistema_nombre', 'Sistema de Citas Gubernamentales', 'Nombre del sistema', 'String', 'General'),
('max_citas_por_usuario', '5', 'Máximo de citas activas por usuario', 'Number', 'Citas'),
('dias_anticipacion_cita', '30', 'Días máximos de anticipación para agendar cita', 'Number', 'Citas'),
('horario_sistema_inicio', '08:00', 'Hora de inicio del sistema', 'String', 'Horarios'),
('horario_sistema_fin', '17:00', 'Hora de fin del sistema', 'String', 'Horarios'),
('email_notificaciones', 'noreply@citas.gob.do', 'Email para envío de notificaciones', 'String', 'Email'),
('mantenimiento_activo', 'false', 'Estado de mantenimiento del sistema', 'Boolean', 'Sistema');

-- Datos de ejemplo para instituciones principales
INSERT INTO instituciones (nombre, descripcion, contacto_email, telefono, direccion_sede, estado) VALUES
('Junta Central Electoral', 'Organismo encargado de la organización y supervisión de los procesos electorales', 'info@jce.gob.do', '809-686-2411', 'Av. Tiradentes, Ensanche Naco, Santo Domingo', TRUE),
('Dirección General de Pasaportes', 'Entidad encargada de la emisión de pasaportes dominicanos', 'info@dgp.gob.do', '809-508-2400', 'Centro de los Héroes, Santo Domingo', TRUE),
('Ministerio de Salud Pública', 'Ministerio responsable de las políticas de salud pública', 'info@msp.gob.do', '809-541-3121', 'Av. San Cristóbal, Gazcue, Santo Domingo', TRUE),
('Procuraduría General de la República', 'Institución del Ministerio Público dominicano', 'info@pgr.gob.do', '809-533-3522', 'Av. Jiménez Moya, Santo Domingo', TRUE);

-- Datos de ejemplo para puntos GOB
INSERT INTO puntos_gob (nombre, ubicacion, direccion_completa, provincia, municipio, capacidad_maxima, horario, estado) VALUES
('Punto GOB Sambil', 'Santo Domingo', 'Centro Comercial Sambil, Av. Winston Churchill, Santo Domingo', 'Distrito Nacional', 'Santo Domingo', 1500, 'Lunes a Viernes - 8am - 7pm', TRUE),
('Punto GOB Megacentro', 'Santo Domingo', 'Plaza Megacentro, Av. Sarasota, Santo Domingo', 'Distrito Nacional', 'Santo Domingo', 1200, 'Lunes a Viernes - 8am - 6pm', TRUE),
('Punto GOB Santiago', 'Santiago', 'Centro de la ciudad de Santiago', 'Santiago', 'Santiago de los Caballeros', 1000, 'Lunes a Viernes - 8am - 5pm', TRUE);

-- Servicios de ejemplo
INSERT INTO servicios (institucion_id, nombre, descripcion, duracion_estimada, estado) VALUES
(1, 'Renovación de Cédula', 'Renovación de cédula de identidad y electoral', '30 minutos', TRUE),
(1, 'Primera Cédula', 'Expedición de primera cédula para mayores de edad', '45 minutos', TRUE),
(2, 'Pasaporte Ordinario', 'Expedición de pasaporte ordinario dominicano', '1 hora', TRUE),
(2, 'Renovación de Pasaporte', 'Renovación de pasaporte vencido o próximo a vencer', '45 minutos', TRUE),
(3, 'Certificado de Salud', 'Emisión de certificado de salud', '20 minutos', TRUE),
(4, 'Carta de Buena Conducta', 'Expedición de carta de buena conducta', '30 minutos', TRUE);

-- Relaciones institución-punto GOB
INSERT INTO institucion_punto_gob (institucion_id, punto_gob_id, fecha_inicio, activo) VALUES
(1, 1, '2024-01-01', TRUE),
(1, 2, '2024-01-01', TRUE),
(1, 3, '2024-01-01', TRUE),
(2, 1, '2024-01-01', TRUE),
(2, 2, '2024-01-01', TRUE),
(3, 1, '2024-01-01', TRUE),
(3, 3, '2024-01-01', TRUE),
(4, 1, '2024-01-01', TRUE),
(4, 2, '2024-01-01', TRUE);

-- Administrador inicial del sistema
INSERT INTO administradores (cedula, nombres, apellidos, email, password_hash, rol, estado) VALUES
('000-0000000-0', 'Administrador', 'Sistema', 'admin@citas.gob.do', '$2y$10$example_hash_here', 'Super Admin', TRUE);

-- =====================================================
-- PROCEDIMIENTOS ALMACENADOS
-- =====================================================

DELIMITER $$

-- Procedimiento para obtener citas por usuario
CREATE PROCEDURE ObtenerCitasUsuario(IN p_usuario_id INT, IN p_estado VARCHAR(20))
BEGIN
    SELECT 
        c.*,
        s.nombre AS servicio_nombre,
        i.nombre AS institucion_nombre,
        pg.nombre AS punto_gob_nombre,
        pg.ubicacion AS punto_gob_ubicacion
    FROM citas c
    JOIN servicios s ON c.servicio_id = s.id
    JOIN instituciones i ON s.institucion_id = i.id
    JOIN puntos_gob pg ON c.punto_gob_id = pg.id
    WHERE c.usuario_id = p_usuario_id
    AND (p_estado IS NULL OR c.estado = p_estado)
    ORDER BY c.fecha_cita DESC, c.hora_cita DESC;
END$$

-- Procedimiento para estadísticas del dashboard
CREATE PROCEDURE EstadisticasDashboard()
BEGIN
    SELECT 
        (SELECT COUNT(*) FROM usuarios WHERE estado = TRUE) AS total_usuarios,
        (SELECT COUNT(*) FROM usuarios WHERE tipo_usuario = 'Nuevo') AS usuarios_nuevos,
        (SELECT COUNT(*) FROM usuarios WHERE tipo_usuario = 'Recurrente') AS usuarios_recurrentes,
        (SELECT COUNT(*) FROM usuarios WHERE tipo_usuario = 'Inhabilitado') AS usuarios_inhabilitados,
        (SELECT COUNT(*) FROM citas WHERE estado = 'Activa') AS citas_activas,
        (SELECT COUNT(*) FROM citas WHERE estado = 'Procesada') AS citas_procesadas,
        (SELECT COUNT(*) FROM citas WHERE estado = 'Cancelada') AS citas_canceladas,
        (SELECT COUNT(*) FROM tickets_soporte WHERE estado IN ('Por asignar', 'Abierto', 'En progreso')) AS tickets_abiertos,
        (SELECT COUNT(*) FROM instituciones WHERE estado = TRUE) AS instituciones_activas,
        (SELECT COUNT(*) FROM puntos_gob WHERE estado = TRUE) AS puntos_gob_activos;
END$$

DELIMITER ;

-- =====================================================
-- COMENTARIOS FINALES
-- =====================================================

-- Esta base de datos está diseñada para manejar:
-- 1. Gestión completa de usuarios ciudadanos
-- 2. Administración de instituciones gubernamentales
-- 3. Control de puntos GOB (ubicaciones físicas)
-- 4. Gestión de servicios/trámites
-- 5. Sistema de agendamiento de citas
-- 6. Sistema de soporte técnico con tickets
-- 7. Administración del sistema con diferentes roles
-- 8. Historial y auditoría de cambios
-- 9. Sistema de notificaciones
-- 10. Configuraciones del sistema
-- 11. Gestión de horarios disponibles

-- La base de datos está optimizada con índices apropiados
-- y incluye triggers para automatizar tareas comunes.

-- Para usar con XAMPP:
-- 1. Iniciar Apache y MySQL en XAMPP
-- 2. Abrir phpMyAdmin (http://localhost/phpmyadmin)
-- 3. Crear nueva base de datos o ejecutar este script completo
-- 4. Los datos de conexión típicos para XAMPP son:
--    Host: localhost
--    Usuario: root
--    Contraseña: (vacía por defecto)
--    Puerto: 3306
