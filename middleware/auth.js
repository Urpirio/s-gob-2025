import { verifyToken } from '../utils/auth.js';
import { query } from '../lib/db.js';

export async function authenticateUser(request) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Token no proporcionado');
    }

    const token = authHeader.substring(7); // Remover "Bearer "
    const decoded = verifyToken(token);

    // Verificar que el usuario existe y está activo
    const user = await query(
      'SELECT id, cedula, nombres, apellidos, email, tipo_usuario, estado FROM usuarios WHERE id = ? AND estado = TRUE',
      [decoded.userId]
    );

    if (!user || user.length === 0) {
      throw new Error('Usuario no encontrado o inactivo');
    }

    return user[0];
  } catch (error) {
    throw new Error('No autorizado: ' + error.message);
  }
}

export async function authenticateAdmin(request) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Token no proporcionado');
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);

    // Verificar que el administrador existe y está activo
    const admin = await query(
      'SELECT id, cedula, nombres, apellidos, email, rol, estado FROM administradores WHERE id = ? AND estado = TRUE',
      [decoded.adminId]
    );

    if (!admin || admin.length === 0) {
      throw new Error('Administrador no encontrado o inactivo');
    }

    return admin[0];
  } catch (error) {
    throw new Error('No autorizado: ' + error.message);
  }
}

// Middleware específico para verificar permisos por rol
export function requireRole(requiredRoles) {
  return async (request, admin) => {
    if (!admin) {
      throw new Error('Administrador requerido');
    }

    if (!requiredRoles.includes(admin.rol)) {
      throw new Error('Permisos insuficientes');
    }

    return true;
  };
}

export default {
  authenticateUser,
  authenticateAdmin,
  requireRole
};
