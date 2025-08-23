# Diagrama del Esquema de Base de Datos
## Sistema de Citas Gubernamentales

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           SISTEMA DE CITAS GUBERNAMENTALES                          │
│                                  ESQUEMA DE BD                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│     USUARIOS     │     │   INSTITUCIONES  │     │   PUNTOS_GOB     │
├──────────────────┤     ├──────────────────┤     ├──────────────────┤
│ id (PK)         │     │ id (PK)         │     │ id (PK)         │
│ cedula (UNIQUE) │     │ nombre          │     │ nombre          │
│ nombres         │     │ descripcion     │     │ ubicacion       │
│ apellidos       │     │ contacto_email  │     │ direccion_completa│
│ email (UNIQUE)  │     │ telefono        │     │ provincia       │
│ telefono        │     │ direccion_sede  │     │ municipio       │
│ sexo            │     │ sitio_web       │     │ capacidad_maxima│
│ direccion       │     │ logo            │     │ capacidad_actual│
│ fecha_nacimiento│     │ horario_atencion│     │ horario         │
│ password_hash   │     │ estado          │     │ telefono        │
│ tipo_usuario    │     │ total_servicios │     │ coordenadas_lat │
│ estado          │     │ total_puntos_gob│     │ coordenadas_lng │
│ foto_perfil     │     │ fecha_registro  │     │ estado          │
│ fecha_registro  │     │ created_at      │     │ total_instituciones│
│ ultimo_acceso   │     │ updated_at      │     │ fecha_apertura  │
│ total_citas     │     └──────────────────┘     │ created_at      │
│ verificado      │                             │ updated_at      │
│ token_verificacion│                          └──────────────────┘
│ created_at      │
│ updated_at      │
└──────────────────┘

         │                           │                           │
         │                           │                           │
         │                           └─────────┐     ┌───────────┘
         │                                     │     │
         │                                     ▼     ▼
         │                            ┌──────────────────┐
         │                            │INSTITUCION_PUNTO_│
         │                            │      GOB         │
         │                            ├──────────────────┤
         │                            │ id (PK)         │
         │                            │ institucion_id  │──┐
         │                            │ punto_gob_id    │──┘
         │                            │ fecha_inicio    │
         │                            │ fecha_fin       │
         │                            │ activo          │
         │                            │ horario_especifico│
         │                            │ capacidad_asignada│
         │                            │ created_at      │
         │                            └──────────────────┘
         │                                     │
         │                                     │
         ▼                                     ▼
┌──────────────────┐                 ┌──────────────────┐
│    SERVICIOS     │                 │  HORARIOS_DISP   │
├──────────────────┤                 ├──────────────────┤
│ id (PK)         │                 │ id (PK)         │
│ institucion_id  │──────────────────│ servicio_id     │
│ nombre          │                 │ punto_gob_id    │
│ descripcion     │                 │ dia_semana      │
│ requisitos      │                 │ hora_inicio     │
│ duracion_estimada│                │ hora_fin        │
│ costo           │                 │ intervalo_minutos│
│ tipo_servicio   │                 │ cupos_disponibles│
│ documentos_req  │                 │ activo          │
│ estado          │                 │ fecha_inicio_vig│
│ disponible_online│                │ fecha_fin_vig   │
│ prioridad       │                 │ created_at      │
│ total_citas     │                 │ updated_at      │
│ created_at      │                 └──────────────────┘
│ updated_at      │
└──────────────────┘
         │
         │
         ▼
┌──────────────────┐
│      CITAS       │
├──────────────────┤
│ id (PK)         │
│ numero_cita     │ ◄──── Auto-generado por trigger
│ usuario_id      │──┐
│ servicio_id     │  │
│ punto_gob_id    │  │
│ fecha_cita      │  │
│ hora_cita       │  │
│ estado          │  │
│ motivo_cancel   │  │
│ observaciones   │  │
│ ticket_confirm  │  │ ◄──── Auto-generado
│ fecha_proceso   │  │
│ usuario_atencion│  │
│ duracion_real   │  │
│ calificacion    │  │
│ comentario_calif│  │
│ recordatorio_env│  │
│ codigo_verif    │  │
│ created_at      │  │
│ updated_at      │  │
└──────────────────┘  │
                      │
         ┌────────────┘
         │
         ▼
┌──────────────────┐
│ HISTORIAL_CITAS  │
├──────────────────┤
│ id (PK)         │
│ cita_id         │
│ estado_anterior │
│ estado_nuevo    │
│ fecha_anterior  │
│ hora_anterior   │
│ fecha_nueva     │
│ hora_nueva      │
│ motivo_cambio   │
│ modificado_por  │
│ tipo_modificador│
│ created_at      │
└──────────────────┘

┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│ ADMINISTRADORES  │     │ TICKETS_SOPORTE  │     │RESPUESTAS_SOPORTE│
├──────────────────┤     ├──────────────────┤     ├──────────────────┤
│ id (PK)         │     │ id (PK)         │     │ id (PK)         │
│ cedula (UNIQUE) │     │ codigo_ticket   │ ◄───│ ticket_id       │
│ nombres         │     │ usuario_id      │     │ respondido_por  │
│ apellidos       │     │ administrador_id│ ◄───│ tipo_respondedor│
│ email (UNIQUE)  │     │ titulo          │     │ mensaje         │
│ telefono        │     │ descripcion     │     │ archivo_adjunto │
│ password_hash   │     │ asunto          │     │ es_solucion     │
│ rol             │ ────│ prioridad       │     │ created_at      │
│ institucion_id  │     │ estado          │     └──────────────────┘
│ punto_gob_id    │     │ canal           │
│ estado          │     │ asignado_a      │ ◄───┐
│ foto_perfil     │     │ fecha_cierre    │     │
│ ultimo_acceso   │     │ tiempo_resolucion│    │
│ permisos        │     │ satisfaccion    │     │
│ fecha_contrat   │     │ comentario_cierre│    │
│ created_at      │     │ created_at      │     │
│ updated_at      │     │ updated_at      │     │
└──────────────────┘     └──────────────────┘     │
                                                  │
                         ┌─────────────────────────┘
                         │
┌──────────────────┐     │     ┌──────────────────┐
│ NOTIFICACIONES   │     │     │   CONFIG_SISTEMA │
├──────────────────┤     │     ├──────────────────┤
│ id (PK)         │     │     │ id (PK)         │
│ usuario_id      │ ────┘     │ clave (UNIQUE)  │
│ tipo            │           │ valor           │
│ titulo          │           │ descripcion     │
│ mensaje         │           │ tipo            │
│ leida           │           │ categoria       │
│ enviada_por     │           │ modificado_por  │
│ cita_id         │           │ created_at      │
│ canal           │           │ updated_at      │
│ fecha_envio     │           └──────────────────┘
│ fecha_lectura   │
│ created_at      │
└──────────────────┘

═══════════════════════════════════════════════════════════════════════════════

                            VISTAS PRINCIPALES

┌──────────────────────────────┐    ┌──────────────────────────────┐
│    VISTA_CITAS_COMPLETA      │    │ VISTA_ESTADISTICAS_INST      │
├──────────────────────────────┤    ├──────────────────────────────┤
│ Unión de:                    │    │ Agregaciones de:             │
│ • citas                      │    │ • instituciones              │
│ • usuarios                   │    │ • servicios                  │
│ • servicios                  │    │ • puntos_gob                 │
│ • instituciones              │    │ • citas                      │
│ • puntos_gob                 │    │                              │
│                              │    │ Métricas calculadas:         │
│ Información completa para:   │    │ • total_servicios            │
│ • Reportes de citas          │    │ • total_puntos_gob           │
│ • Búsquedas avanzadas        │    │ • total_citas                │
│ • Exportación de datos       │    │ • citas_por_estado           │
└──────────────────────────────┘    │ • calificacion_promedio      │
                                    └──────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

                              TRIGGERS ACTIVOS

┌──────────────────────────────────────────────────────────────────────────────┐
│ 1. actualizar_total_citas_usuario                                            │
│    Dispara: AFTER INSERT ON citas                                           │
│    Acción: Actualiza contador total_citas en tabla usuarios                 │
│                                                                              │
│ 2. generar_numero_cita                                                      │
│    Dispara: BEFORE INSERT ON citas                                          │
│    Acción: Genera número único formato "CITA-YYYY-XXXXXX"                  │
│                                                                              │
│ 3. generar_codigo_ticket                                                    │
│    Dispara: BEFORE INSERT ON tickets_soporte                               │
│    Acción: Genera código único formato "TKT-YYYY-XXXXX"                    │
└──────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

                         PROCEDIMIENTOS ALMACENADOS

┌──────────────────────────────────────────────────────────────────────────────┐
│ ObtenerCitasUsuario(p_usuario_id, p_estado)                                 │
│ ├─ Parámetros: ID del usuario, estado de cita (opcional)                    │
│ └─ Retorna: Citas con información completa de servicios e instituciones     │
│                                                                              │
│ EstadisticasDashboard()                                                      │
│ ├─ Parámetros: Ninguno                                                      │
│ └─ Retorna: Métricas generales del sistema para dashboard administrativo    │
└──────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

                              FLUJO DE DATOS

┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   USUARIO   │    │   SERVICIO  │    │    CITA     │    │  HISTORIAL  │
│ se registra │───▶│ selecciona  │───▶│  se agenda  │───▶│ se registra │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                              │
                                              ▼
                                    ┌─────────────┐
                                    │NOTIFICACIÓN │
                                    │  se envía   │
                                    └─────────────┘

═══════════════════════════════════════════════════════════════════════════════

                            INDICES PRINCIPALES

┌──────────────────────────────────────────────────────────────────────────────┐
│ ÚNICOS:                          │ COMPUESTOS:                              │
│ • usuarios.cedula                │ • citas(fecha_cita, estado)             │
│ • usuarios.email                 │ • citas(usuario_id, estado)             │
│ • citas.numero_cita             │ • servicios(institucion_id, estado)     │
│ • tickets_soporte.codigo_ticket  │ • tickets_soporte(estado, prioridad)    │
│ • instituciones.nombre           │                                          │
│ • configuraciones.clave          │ RELACIONES:                              │
│                                  │ • Todas las claves foráneas indexadas   │
│ BÚSQUEDA:                        │ • Campos de fecha para consultas        │
│ • usuarios.tipo_usuario          │ • Estados para filtros frecuentes       │
│ • citas.estado                   │                                          │
│ • tickets_soporte.prioridad      │                                          │
└──────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

                          TIPOS DE DATOS ENUMERADOS

┌────────────────────────┬─────────────────────────────────────────────────────┐
│       TABLA            │                    VALORES                         │
├────────────────────────┼─────────────────────────────────────────────────────┤
│ usuarios.sexo          │ 'Masculino', 'Femenino', 'Otro'                    │
│ usuarios.tipo_usuario  │ 'Nuevo', 'Recurrente', 'Inhabilitado'              │
│ servicios.prioridad    │ 'Baja', 'Media', 'Alta'                            │
│ citas.estado           │ 'Activa', 'Procesada', 'Cancelada',                │
│                        │ 'Fallida', 'Reprogramada'                          │
│ administradores.rol    │ 'Super Admin', 'Admin Institución',                │
│                        │ 'Admin Punto GOB', 'Soporte TI'                    │
│ tickets_soporte.asunto │ 'Problema técnico', 'Consulta general',            │
│                        │ 'Error en cita', 'Problema de acceso', 'Otro'      │
│ tickets_soporte.prioridad│ 'Ordinaria', 'Prioritaria', 'Urgente'            │
│ tickets_soporte.estado │ 'Por asignar', 'Abierto', 'En progreso',           │
│                        │ 'Escalado', 'Cerrado'                              │
│ notificaciones.tipo    │ 'Recordatorio cita', 'Confirmación cita',          │
│                        │ 'Cancelación', 'Información general', 'Soporte'    │
└────────────────────────┴─────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
                         SISTEMA OPTIMIZADO PARA XAMPP
                           MySQL 5.7+ / MariaDB 10.3+
═══════════════════════════════════════════════════════════════════════════════
```
