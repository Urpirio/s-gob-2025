import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

// Generar token JWT
export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d', // Token válido por 7 días
  });
}

// Verificar token JWT
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Token inválido');
  }
}

// Hash de contraseña
export async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Verificar contraseña
export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// Generar código aleatorio (para tickets, confirmaciones, etc.)
export function generateCode(prefix = '', length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return prefix + result;
}

// Generar número de cita único
export function generateCitaNumber() {
  const year = new Date().getFullYear();
  const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `CITA-${year}-${randomNumber}`;
}

// Generar código de ticket único
export function generateTicketCode() {
  const year = new Date().getFullYear();
  const randomNumber = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  return `TKT-${year}-${randomNumber}`;
}

export default {
  generateToken,
  verifyToken,
  hashPassword,
  verifyPassword,
  generateCode,
  generateCitaNumber,
  generateTicketCode
};
