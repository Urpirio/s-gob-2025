import { verifyToken } from '@/utils/auth';

// Middleware to authenticate users
export async function authenticateUser(request) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Token de autorización requerido');
  }
  
  const token = authHeader.substring(7); // Remove 'Bearer ' prefix
  
  try {
    const decoded = verifyToken(token);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
}

// Middleware to check admin permissions
export async function authenticateAdmin(request) {
  const user = await authenticateUser(request);
  
  if (user.tipo !== 'admin') {
    throw new Error('Permisos de administrador requeridos');
  }
  
  return user;
}

// Get token from request
export function getTokenFromRequest(request) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  return authHeader.substring(7);
}
