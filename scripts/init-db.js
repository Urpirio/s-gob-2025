import { query } from '../lib/db.js';
import { hashPassword } from '../src/utils/auth.js';

export async function initializeDatabase() {
  try {
    console.log('🚀 Iniciando configuración de la base de datos...');

    // Verificar si ya hay datos iniciales
    const existingInstituciones = await query('SELECT COUNT(*) as count FROM instituciones');
    
    if (existingInstituciones[0].count > 0) {
      console.log('✅ La base de datos ya tiene datos iniciales');
      return;
    }

    // Crear usuario administrador inicial
    const adminPassword = await hashPassword('admin123');
    await query(
      `INSERT INTO administradores 
       (cedula, nombres, apellidos, email, password_hash, rol, estado, 
        permisos, fecha_contratacion, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, TRUE, ?, NOW(), NOW(), NOW())`,
      [
        '001-0000000-1',
        'Administrador',
        'Sistema',
        'admin@citas.gob.do',
        adminPassword,
        'Super Admin',
        JSON.stringify(['all'])
      ]
    );

    // Crear usuario de prueba
    const userPassword = await hashPassword('usuario123');
    await query(
      `INSERT INTO usuarios 
       (cedula, nombres, apellidos, email, telefono, password_hash, sexo, 
        direccion, fecha_nacimiento, tipo_usuario, estado, verificado, 
        total_citas, fecha_registro, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Nuevo', TRUE, TRUE, 0, NOW(), NOW(), NOW())`,
      [
        '402-1234567-8',
        'Juan Carlos',
        'Pérez González',
        'juan.perez@email.com',
        '809-555-1234',
        userPassword,
        'Masculino',
        'Calle 5 #123, Santo Domingo, Distrito Nacional',
        '1990-05-15'
      ]
    );

    // Insertar relaciones institución-punto GOB
    const relacionesInstPunto = [
      [1, 1, 300, true], // JCE en Sambil
      [1, 2, 250, true], // JCE en Megacentro  
      [1, 3, 200, true], // JCE en Santiago
      [2, 1, 200, true], // Pasaportes en Sambil
      [2, 2, 150, true], // Pasaportes en Megacentro
      [3, 1, 100, true], // Salud en Sambil
      [4, 1, 150, true]  // Procuraduría en Sambil
    ];

    for (const [inst_id, punto_id, capacidad, activo] of relacionesInstPunto) {
      await query(
        `INSERT INTO institucion_punto_gob 
         (institucion_id, punto_gob_id, capacidad_asignada, activo, created_at, updated_at)
         VALUES (?, ?, ?, ?, NOW(), NOW())`,
        [inst_id, punto_id, capacidad, activo]
      );
    }

    // Actualizar contadores en instituciones
    await query(`
      UPDATE instituciones i 
      SET total_puntos_gob = (
        SELECT COUNT(*) FROM institucion_punto_gob ipg 
        WHERE ipg.institucion_id = i.id AND ipg.activo = TRUE
      )
    `);

    // Actualizar contadores en puntos GOB
    await query(`
      UPDATE puntos_gob pg 
      SET total_instituciones = (
        SELECT COUNT(*) FROM institucion_punto_gob ipg 
        WHERE ipg.punto_gob_id = pg.id AND ipg.activo = TRUE
      )
    `);

    // Insertar horarios disponibles de ejemplo
    const servicios = await query('SELECT id FROM servicios');
    const puntosGob = await query('SELECT id FROM puntos_gob');

    for (const servicio of servicios) {
      for (const punto of puntosGob) {
        // Crear horarios para lunes a viernes
        for (let dia = 1; dia <= 5; dia++) {
          await query(
            `INSERT INTO horarios_disponibles 
             (servicio_id, punto_gob_id, dia_semana, hora_inicio, hora_fin, 
              intervalo_minutos, cupos_disponibles, activo, 
              fecha_inicio_vigencia, fecha_fin_vigencia, created_at, updated_at)
             VALUES (?, ?, ?, '08:00', '17:00', 30, 20, TRUE, CURDATE(), 
                     DATE_ADD(CURDATE(), INTERVAL 1 YEAR), NOW(), NOW())`,
            [servicio.id, punto.id, dia]
          );
        }
      }
    }

    console.log('✅ Base de datos inicializada correctamente');
    console.log('📋 Credenciales de administrador:');
    console.log('   Email: admin@citas.gob.do');
    console.log('   Contraseña: admin123');
    console.log('📋 Credenciales de usuario de prueba:');
    console.log('   Email: juan.perez@email.com');
    console.log('   Cédula: 402-1234567-8');
    console.log('   Contraseña: usuario123');

  } catch (error) {
    console.error('❌ Error inicializando la base de datos:', error);
    throw error;
  }
}

// Ejecutar si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
