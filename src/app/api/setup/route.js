import { getConnection, query } from '@/lib/db';
import { hashPassword } from '@/utils/auth';

// Función para inicializar la base de datos
async function initializeDatabase() {
  try {
    console.log('🔄 Inicializando base de datos...');

    // Insertar instituciones
    const instituciones = [
      {
        nombre: 'Junta Central Electoral',
        siglas: 'JCE',
        descripcion: 'Organismo responsable de la organización y supervisión de los procesos electorales',
        telefono: '809-686-2362',
        email: 'info@jce.gob.do',
        direccion: 'Av. Jiménez Moya esq. Juan Bosch, Santo Domingo',
        horario_atencion: 'Lunes a Viernes 8:00 AM - 5:00 PM'
      },
      {
        nombre: 'Dirección General de Pasaportes',
        siglas: 'DGP',
        descripcion: 'Organismo encargado de la expedición de pasaportes dominicanos',
        telefono: '809-565-3535',
        email: 'info@dgp.gob.do',
        direccion: 'Av. 27 de Febrero, Plaza de la Cultura, Santo Domingo',
        horario_atencion: 'Lunes a Viernes 8:00 AM - 4:00 PM'
      },
      {
        nombre: 'Ministerio de Salud Pública',
        siglas: 'MSP',
        descripcion: 'Ministerio responsable de las políticas de salud pública',
        telefono: '809-541-3121',
        email: 'info@msp.gob.do',
        direccion: 'Av. San Cristóbal esq. Av. Tiradentes, Santo Domingo',
        horario_atencion: 'Lunes a Viernes 8:00 AM - 5:00 PM'
      }
    ];

    console.log('📋 Insertando instituciones...');
    for (const institucion of instituciones) {
      await query(`
        INSERT IGNORE INTO instituciones 
        (nombre, siglas, descripcion, telefono, email, direccion, horario_atencion, estado, fecha_creacion) 
        VALUES (?, ?, ?, ?, ?, ?, ?, TRUE, NOW())
      `, [
        institucion.nombre,
        institucion.siglas,
        institucion.descripcion,
        institucion.telefono,
        institucion.email,
        institucion.direccion,
        institucion.horario_atencion
      ]);
    }

    // Crear usuario administrador
    const adminPassword = await hashPassword('admin123');
    await query(`
      INSERT IGNORE INTO administradores 
      (nombre, email, password, rol, estado, fecha_creacion) 
      VALUES (?, ?, ?, ?, TRUE, NOW())
    `, ['Administrador del Sistema', 'admin@citas.gob.do', adminPassword, 'super_admin']);

    // Crear usuario de prueba
    const userPassword = await hashPassword('usuario123');
    await query(`
      INSERT IGNORE INTO usuarios 
      (nombres, apellidos, cedula, email, telefono, password, fecha_nacimiento, sexo, direccion, estado, fecha_creacion) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, TRUE, NOW())
    `, [
      'Juan Carlos',
      'Pérez González',
      '402-1234567-8',
      'juan.perez@email.com',
      '829-123-4567',
      userPassword,
      '1990-05-15',
      'M',
      'Calle Principal No. 123, Santo Domingo'
    ]);

    console.log('✅ Base de datos inicializada correctamente');
    return { success: true, message: 'Base de datos inicializada correctamente' };

  } catch (error) {
    console.error('❌ Error inicializando base de datos:', error);
    return { success: false, error: error.message };
  }
}

export async function GET(request) {
  try {
    // Verificar conexión a la base de datos
    const connection = await getConnection();
    
    // Verificar que las tablas principales existen
    const tables = await query("SHOW TABLES");
    const tableNames = tables.map(table => Object.values(table)[0]);
    
    const requiredTables = [
      'usuarios', 'instituciones', 'puntos_gob', 'servicios', 
      'citas', 'administradores', 'tickets_soporte'
    ];
    
    const missingTables = requiredTables.filter(table => !tableNames.includes(table));
    
    if (missingTables.length > 0) {
      return Response.json({
        status: 'error',
        message: 'Faltan tablas en la base de datos',
        missing_tables: missingTables,
        suggestion: 'Ejecuta el script citas_gob_schema.sql para crear las tablas'
      }, { status: 500 });
    }

    // Verificar si hay datos iniciales
    const institutionCount = await query('SELECT COUNT(*) as count FROM instituciones');
    const serviceCount = await query('SELECT COUNT(*) as count FROM servicios');
    const puntoGobCount = await query('SELECT COUNT(*) as count FROM puntos_gob');

    return Response.json({
      status: 'success',
      message: 'Conexión a base de datos exitosa',
      database_info: {
        tables_found: tableNames.length,
        institutions: institutionCount[0].count,
        services: serviceCount[0].count,
        puntos_gob: puntoGobCount[0].count
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Error verificando base de datos:', error);
    
    return Response.json({
      status: 'error', 
      message: 'Error conectando a la base de datos',
      details: error.message,
      suggestions: [
        'Verifica que XAMPP esté ejecutándose',
        'Verifica que MySQL esté activo',
        'Verifica las credenciales en .env.local',
        'Asegúrate de que la base de datos "citas_gob" existe'
      ]
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { action } = await request.json();

    if (action === 'initialize') {
      await initializeDatabase();
      
      return Response.json({
        status: 'success',
        message: 'Base de datos inicializada con datos de ejemplo',
        credentials: {
          admin: {
            email: 'admin@citas.gob.do',
            password: 'admin123'
          },
          user: {
            email: 'juan.perez@email.com',
            cedula: '402-1234567-8',
            password: 'usuario123'
          }
        }
      }, { status: 200 });
    }

    return Response.json({
      status: 'error',
      message: 'Acción no válida'
    }, { status: 400 });

  } catch (error) {
    console.error('Error inicializando base de datos:', error);
    
    return Response.json({
      status: 'error',
      message: 'Error inicializando la base de datos',
      details: error.message
    }, { status: 500 });
  }
}
