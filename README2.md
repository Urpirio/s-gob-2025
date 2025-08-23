# Sistema de Citas Gubernamentales - Esquema de Base de Datos

## Descripción General

Este esquema de base de datos está diseñado para un sistema completo de gestión de citas gubernamentales que permite a los ciudadanos agendar citas para diversos trámites en diferentes instituciones del gobierno dominicano a través de los "Puntos GOB".

## Características Principales

- ✅ Gestión completa de usuarios ciudadanos
- ✅ Administración de instituciones gubernamentales
- ✅ Control de puntos GOB (ubicaciones físicas)
- ✅ Gestión de servicios/trámites por institución
- ✅ Sistema de agendamiento de citas con estados
- ✅ Sistema de soporte técnico con tickets
- ✅ Administración del sistema con roles diferenciados
- ✅ Historial y auditoría de cambios
- ✅ Sistema de notificaciones
- ✅ Configuraciones del sistema
- ✅ Gestión de horarios disponibles

## Entidades Principales

### 1. **usuarios**
Gestiona los ciudadanos registrados en el sistema.

**Campos principales:**
- `cedula`: Identificación única del ciudadano
- `nombres`, `apellidos`: Información personal
- `email`, `telefono`: Datos de contacto
- `tipo_usuario`: Nuevo, Recurrente, Inhabilitado
- `total_citas`: Contador automático de citas

### 2. **instituciones**
Organismos gubernamentales que ofrecen servicios.

**Campos principales:**
- `nombre`: Nombre de la institución
- `contacto_email`: Email principal de contacto
- `total_servicios`: Contador de servicios activos
- `total_puntos_gob`: Número de puntos GOB donde opera

### 3. **puntos_gob**
Ubicaciones físicas donde se brindan servicios.

**Campos principales:**
- `nombre`: Identificación del punto (ej: "Punto GOB Sambil")
- `ubicacion`, `provincia`, `municipio`: Información geográfica
- `capacidad_maxima`, `capacidad_actual`: Control de aforo
- `coordenadas_lat`, `coordenadas_lng`: Para mapas

### 4. **servicios**
Trámites específicos que ofrecen las instituciones.

**Campos principales:**
- `institucion_id`: Relación con la institución
- `nombre`: Nombre del servicio (ej: "Renovación de Cédula")
- `descripcion`, `requisitos`: Información detallada
- `duracion_estimada`: Tiempo promedio del trámite
- `documentos_requeridos`: Lista de documentos necesarios

### 5. **citas**
Agendamientos de servicios por parte de usuarios.

**Campos principales:**
- `numero_cita`: Identificador único auto-generado
- `usuario_id`, `servicio_id`, `punto_gob_id`: Relaciones principales
- `fecha_cita`, `hora_cita`: Programación temporal
- `estado`: Activa, Procesada, Cancelada, Fallida, Reprogramada
- `ticket_confirmacion`: Código para el usuario
- `calificacion_servicio`: Evaluación post-servicio (1-5)

### 6. **tickets_soporte**
Sistema de soporte técnico.

**Campos principales:**
- `codigo_ticket`: Identificador único auto-generado
- `asunto`: Categoría del problema
- `prioridad`: Ordinaria, Prioritaria, Urgente
- `estado`: Por asignar, Abierto, En progreso, Escalado, Cerrado
- `asignado_a`: Administrador responsable

### 7. **administradores**
Personal que administra el sistema.

**Roles disponibles:**
- `Super Admin`: Control total del sistema
- `Admin Institución`: Gestión de una institución específica
- `Admin Punto GOB`: Administración de un punto GOB
- `Soporte TI`: Manejo de tickets de soporte

## Relaciones Importantes

### Relación Many-to-Many: Instituciones ↔ Puntos GOB
La tabla `institucion_punto_gob` permite que:
- Una institución opere en múltiples puntos GOB
- Un punto GOB albergue múltiples instituciones
- Se controle la capacidad asignada por institución

### Flujo de Citas
1. **Usuario** se registra en el sistema
2. **Usuario** selecciona un **Servicio** de una **Institución**
3. **Usuario** elige un **Punto GOB** donde está disponible el servicio
4. Se crea una **Cita** con estado "Activa"
5. El sistema genera automáticamente el `numero_cita` y `ticket_confirmacion`

## Vistas Principales

### `vista_citas_completa`
Información completa de citas incluyendo datos del usuario, servicio, institución y punto GOB.

### `vista_estadisticas_instituciones`
Estadísticas agregadas por institución: total de servicios, puntos GOB, citas y calificaciones.

## Triggers Automáticos

1. **`actualizar_total_citas_usuario`**: Actualiza el contador de citas por usuario
2. **`generar_numero_cita`**: Genera automáticamente códigos únicos para citas
3. **`generar_codigo_ticket`**: Genera automáticamente códigos únicos para tickets

## Procedimientos Almacenados

### `ObtenerCitasUsuario(usuario_id, estado)`
Obtiene todas las citas de un usuario con información completa.

### `EstadisticasDashboard()`
Genera estadísticas generales del sistema para el dashboard administrativo.

## Estados del Sistema

### Estados de Citas
- **Activa**: Cita programada pendiente
- **Procesada**: Cita completada exitosamente
- **Cancelada**: Cita cancelada por usuario o administrador
- **Fallida**: Usuario no se presentó o problema en el servicio
- **Reprogramada**: Cita movida a nueva fecha/hora

### Estados de Tickets
- **Por asignar**: Ticket nuevo sin asignar
- **Abierto**: Ticket asignado y en trabajo
- **En progreso**: Ticket siendo trabajado activamente
- **Escalado**: Ticket escalado a nivel superior
- **Cerrado**: Ticket resuelto

### Tipos de Usuario
- **Nuevo**: Usuario recién registrado
- **Recurrente**: Usuario con múltiples citas exitosas
- **Inhabilitado**: Usuario con restricciones

## Configuración para XAMPP

### Requisitos
- XAMPP con MySQL 5.7+ o MariaDB 10.3+
- PHP 7.4+ (para aplicación web)
- phpMyAdmin (incluido en XAMPP)

### Instalación

1. **Iniciar servicios en XAMPP:**
   ```
   - Apache
   - MySQL
   ```

2. **Acceder a phpMyAdmin:**
   ```
   http://localhost/phpmyadmin
   ```

3. **Ejecutar el script:**
   - Crear nueva base de datos llamada `citas_gob`
   - Importar el archivo `citas_gob_schema.sql`
   - O ejecutar el SQL completo en la pestaña SQL

4. **Configuración de conexión típica:**
   ```
   Host: localhost
   Usuario: root
   Contraseña: (vacía por defecto)
   Puerto: 3306
   Base de datos: citas_gob
   ```

### Datos de Ejemplo Incluidos

El esquema incluye datos iniciales para:
- ✅ Instituciones principales (JCE, Pasaportes, Salud, Procuraduría)
- ✅ Puntos GOB (Sambil, Megacentro, Santiago)
- ✅ Servicios básicos por institución
- ✅ Relaciones institución-punto GOB
- ✅ Administrador del sistema inicial
- ✅ Configuraciones del sistema

## Optimizaciones Incluidas

### Índices
- Índices únicos en campos críticos (cedula, email, numero_cita)
- Índices compuestos para consultas frecuentes
- Índices en claves foráneas para JOIN eficientes

### Seguridad
- Restricciones CHECK en campos numéricos
- Cascadas apropiadas en eliminaciones
- Campos de auditoría (created_at, updated_at)

## Escalabilidad

El esquema está diseñado para:
- ✅ Manejar miles de usuarios simultáneos
- ✅ Millones de citas históricas
- ✅ Múltiples instituciones y puntos GOB
- ✅ Sistema de notificaciones masivas
- ✅ Reportes y estadísticas complejas

## Extensiones Futuras

Campos y estructuras preparadas para:
- 🔄 Integración con APIs externas
- 🔄 Sistema de pagos en línea
- 🔄 Geolocalización avanzada
- 🔄 Inteligencia artificial para optimización
- 🔄 App móvil con notificaciones push
- 🔄 Sistema de colas virtuales

## Mantenimiento

### Respaldos Recomendados
- Respaldo diario automático
- Respaldo antes de actualizaciones
- Archivos de log rotativos

### Monitoreo
- Consultas lentas (slow queries)
- Crecimiento de tablas principales
- Estadísticas de uso por servicio

---

**Desarrollado para el Sistema de Citas Gubernamentales**  
Compatible con XAMPP y entornos de desarrollo local.
