import { query } from '@/lib/db';
import { verifyPassword, generateToken } from '@/utils/auth';
import { validateEmail, validateCedula } from '@/utils/validations';
import { corsResponse, corsOptionsResponse } from '@/utils/cors';

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request) {
  try {
    const { identifier, password } = await request.json();

    if (!identifier || !password) {
      return corsResponse(
        { error: 'Email/Cédula y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Determinar si el identificador es email o cédula
    let whereClause;
    let params;

    if (validateEmail(identifier)) {
      whereClause = 'email = ? AND estado = TRUE';
      params = [identifier];
    } else if (validateCedula(identifier)) {
      whereClause = 'cedula = ? AND estado = TRUE';
      params = [identifier];
    } else {
      return Response.json(
        { error: 'Formato de email o cédula inválido' },
        { status: 400 }
      );
    }

    // Buscar usuario
    const users = await query(
      `SELECT id, cedula, nombres, apellidos, email, password_hash, tipo_usuario, verificado 
       FROM usuarios WHERE ${whereClause}`,
      params
    );

    if (!users || users.length === 0) {
      return Response.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    const user = users[0];

    // Verificar contraseña
    const isValidPassword = await verifyPassword(password, user.password_hash);
    if (!isValidPassword) {
      return Response.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Generar token
    const token = generateToken({
      userId: user.id,
      cedula: user.cedula,
      tipo: 'usuario'
    });

    // Actualizar último acceso
    await query(
      'UPDATE usuarios SET ultimo_acceso = NOW() WHERE id = ?',
      [user.id]
    );

    // Respuesta exitosa (sin incluir password_hash)
    const userResponse = {
      id: user.id,
      cedula: user.cedula,
      nombres: user.nombres,
      apellidos: user.apellidos,
      email: user.email,
      tipo_usuario: user.tipo_usuario,
      verificado: user.verificado
    };

    return Response.json({
      message: 'Login exitoso',
      user: userResponse,
      token
    }, { status: 200 });

  } catch (error) {
    console.error('Error en login:', error);
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
