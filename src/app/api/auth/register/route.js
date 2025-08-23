import { query } from '@/lib/db';
import { hashPassword, generateToken, generateCode } from '@/utils/auth';
import { validateUserData, sanitizeInput } from '@/utils/validations';

export async function POST(request) {
  try {
    const userData = await request.json();

    // Sanitizar datos de entrada
    const sanitizedData = {
      cedula: sanitizeInput(userData.cedula),
      nombres: sanitizeInput(userData.nombres),
      apellidos: sanitizeInput(userData.apellidos),
      email: sanitizeInput(userData.email?.toLowerCase()),
      telefono: sanitizeInput(userData.telefono),
      password: userData.password,
      sexo: sanitizeInput(userData.sexo),
      direccion: sanitizeInput(userData.direccion),
      fecha_nacimiento: userData.fecha_nacimiento
    };

    // Validar datos
    const validation = validateUserData(sanitizedData);
    if (!validation.isValid) {
      return Response.json(
        { error: 'Datos inválidos', details: validation.errors },
        { status: 400 }
      );
    }

    // Verificar que no exista un usuario con la misma cédula o email
    const existingUser = await query(
      'SELECT id FROM usuarios WHERE cedula = ? OR email = ?',
      [sanitizedData.cedula, sanitizedData.email]
    );

    if (existingUser && existingUser.length > 0) {
      return Response.json(
        { error: 'Ya existe un usuario con esta cédula o email' },
        { status: 409 }
      );
    }

    // Hash de la contraseña
    const hashedPassword = await hashPassword(sanitizedData.password);

    // Generar token de verificación
    const tokenVerificacion = generateCode('VER_', 8);

    // Insertar usuario en la base de datos
    const result = await query(
      `INSERT INTO usuarios 
       (cedula, nombres, apellidos, email, telefono, password_hash, sexo, direccion, 
        fecha_nacimiento, tipo_usuario, estado, verificado, token_verificacion, 
        total_citas, fecha_registro, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Nuevo', TRUE, FALSE, ?, 0, NOW(), NOW(), NOW())`,
      [
        sanitizedData.cedula,
        sanitizedData.nombres,
        sanitizedData.apellidos,
        sanitizedData.email,
        sanitizedData.telefono,
        hashedPassword,
        sanitizedData.sexo || 'No especificado',
        sanitizedData.direccion,
        sanitizedData.fecha_nacimiento,
        tokenVerificacion
      ]
    );

    // Generar token JWT para el usuario recién registrado
    const token = generateToken({
      userId: result.insertId,
      cedula: sanitizedData.cedula,
      tipo: 'usuario'
    });

    // Respuesta exitosa
    const userResponse = {
      id: result.insertId,
      cedula: sanitizedData.cedula,
      nombres: sanitizedData.nombres,
      apellidos: sanitizedData.apellidos,
      email: sanitizedData.email,
      telefono: sanitizedData.telefono,
      tipo_usuario: 'Nuevo',
      verificado: false
    };

    return Response.json({
      message: 'Usuario registrado exitosamente',
      user: userResponse,
      token,
      verificacion_pendiente: true
    }, { status: 201 });

  } catch (error) {
    console.error('Error en registro:', error);
    
    // Manejar errores específicos de MySQL
    if (error.code === 'ER_DUP_ENTRY') {
      return Response.json(
        { error: 'Ya existe un usuario con esta información' },
        { status: 409 }
      );
    }

    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
