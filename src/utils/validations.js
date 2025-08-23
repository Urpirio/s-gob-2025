// Validate email format
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Dominican cedula format
export function validateCedula(cedula) {
  // Dominican cedula format: XXX-XXXXXXX-X
  const cedulaRegex = /^\d{3}-\d{7}-\d{1}$/;
  return cedulaRegex.test(cedula);
}

// Validate phone number
export function validatePhone(phone) {
  // Dominican phone format: XXX-XXX-XXXX or XXXXXXXXXX
  const phoneRegex = /^(\d{3}-\d{3}-\d{4}|\d{10})$/;
  return phoneRegex.test(phone);
}

// Sanitize input to prevent XSS
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

// Validate user registration data
export function validateUserData(data) {
  const errors = [];
  
  if (!data.nombres || data.nombres.length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }
  
  if (!data.apellidos || data.apellidos.length < 2) {
    errors.push('Los apellidos deben tener al menos 2 caracteres');
  }
  
  if (!validateEmail(data.email)) {
    errors.push('El email no tiene un formato válido');
  }
  
  if (!validateCedula(data.cedula)) {
    errors.push('La cédula debe tener el formato XXX-XXXXXXX-X');
  }
  
  if (!data.telefono || !validatePhone(data.telefono)) {
    errors.push('El teléfono debe tener un formato válido');
  }
  
  if (!data.password || data.password.length < 6) {
    errors.push('La contraseña debe tener al menos 6 caracteres');
  }
  
  if (!data.fecha_nacimiento) {
    errors.push('La fecha de nacimiento es requerida');
  }
  
  if (!data.sexo || !['M', 'F'].includes(data.sexo)) {
    errors.push('El sexo debe ser M o F');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Validate appointment data
export function validateCitaData(data) {
  const errors = [];
  
  if (!data.servicio_id) {
    errors.push('El servicio es requerido');
  }
  
  if (!data.punto_gob_id) {
    errors.push('El punto GOB es requerido');
  }
  
  if (!data.fecha_cita) {
    errors.push('La fecha de la cita es requerida');
  }
  
  if (!data.hora_cita) {
    errors.push('La hora de la cita es requerida');
  }
  
  // Validate future date
  const citaDate = new Date(`${data.fecha_cita} ${data.hora_cita}`);
  const now = new Date();
  
  if (citaDate <= now) {
    errors.push('La fecha y hora de la cita debe ser en el futuro');
  }
  
  // Validate business hours (8:00 AM to 5:00 PM)
  const hour = parseInt(data.hora_cita.split(':')[0]);
  if (hour < 8 || hour >= 17) {
    errors.push('La hora debe estar entre 8:00 AM y 5:00 PM');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Validate date range
export function validateDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return start <= end;
}

// Format Dominican cedula
export function formatCedula(cedula) {
  // Remove any non-digit characters
  const digits = cedula.replace(/\D/g, '');
  
  // Format as XXX-XXXXXXX-X
  if (digits.length === 11) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 10)}-${digits.slice(10)}`;
  }
  
  return cedula; // Return original if not 11 digits
}

// Format Dominican phone
export function formatPhone(phone) {
  // Remove any non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as XXX-XXX-XXXX
  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  
  return phone; // Return original if not 10 digits
}
