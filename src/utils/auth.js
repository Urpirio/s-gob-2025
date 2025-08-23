import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Hash password
export async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

// Verify password
export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// Generate JWT token
export function generateToken(userData) {
  const payload = {
    id: userData.id,
    email: userData.email,
    cedula: userData.cedula,
    tipo: userData.tipo || 'usuario'
  };
  
  return jwt.sign(payload, process.env.JWT_SECRET, { 
    expiresIn: '7d' 
  });
}

// Verify JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Token inválido');
  }
}

// Generate appointment number
export function generateCitaNumber() {
  const prefix = 'CITA';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${timestamp}${random}`;
}

// Generate general code
export function generateCode(prefix = 'CODE', length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = prefix + '-';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Generate ticket code
export function generateTicketCode() {
  return generateCode('TICKET', 6);
}
