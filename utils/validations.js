// Validaciones comunes para el sistema

// Validar formato de cédula dominicana
export function validateCedula(cedula) {
  const cedulaRegex = /^\d{3}-?\d{7}-?\d{1}$/;
  return cedulaRegex.test(cedula);
}

// Validar formato de email
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validar formato de teléfono dominicano
export function validateTelefono(telefono) {
  const telefonoRegex = /^(\+1-?)?(809|829|849)-?\d{3}-?\d{4}$/;
  return telefonoRegex.test(telefono);
}

// Validar contraseña (mínimo 8 caracteres, al menos una letra y un número)
export function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}

// Validar que la fecha sea futura
export function validateFutureDate(fecha) {
  const fechaCita = new Date(fecha);
  const ahora = new Date();
  return fechaCita > ahora;
}

// Validar horario de trabajo (8:00 AM - 5:00 PM)
export function validateHorarioTrabajo(hora) {
  const [horas, minutos] = hora.split(':').map(Number);
  const horaDecimal = horas + minutos / 60;
  return horaDecimal >= 8 && horaDecimal <= 17;
}

// Validar que sea día laborable (lunes a viernes)
export function validateDiaLaborable(fecha) {
  const dia = new Date(fecha).getDay();
  return dia >= 1 && dia <= 5; // 1 = lunes, 5 = viernes
}

// Sanitizar entrada de texto
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
}

// Validar datos de usuario para registro
export function validateUserData(userData) {
  const errors = [];

  if (!userData.cedula || !validateCedula(userData.cedula)) {
    errors.push('Cédula inválida');
  }

  if (!userData.nombres || userData.nombres.length < 2) {
    errors.push('Los nombres son requeridos (mínimo 2 caracteres)');
  }

  if (!userData.apellidos || userData.apellidos.length < 2) {
    errors.push('Los apellidos son requeridos (mínimo 2 caracteres)');
  }

  if (!userData.email || !validateEmail(userData.email)) {
    errors.push('Email inválido');
  }

  if (!userData.telefono || !validateTelefono(userData.telefono)) {
    errors.push('Teléfono inválido');
  }

  if (!userData.password || !validatePassword(userData.password)) {
    errors.push('Contraseña debe tener al menos 8 caracteres, una letra y un número');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Validar datos de cita
export function validateCitaData(citaData) {
  const errors = [];

  if (!citaData.usuario_id) {
    errors.push('Usuario requerido');
  }

  if (!citaData.servicio_id) {
    errors.push('Servicio requerido');
  }

  if (!citaData.punto_gob_id) {
    errors.push('Punto GOB requerido');
  }

  if (!citaData.fecha_cita || !validateFutureDate(citaData.fecha_cita)) {
    errors.push('Fecha de cita debe ser futura');
  }

  if (!citaData.hora_cita || !validateHorarioTrabajo(citaData.hora_cita)) {
    errors.push('Hora debe estar entre 8:00 AM y 5:00 PM');
  }

  if (citaData.fecha_cita && !validateDiaLaborable(citaData.fecha_cita)) {
    errors.push('Las citas solo se pueden agendar de lunes a viernes');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export default {
  validateCedula,
  validateEmail,
  validateTelefono,
  validatePassword,
  validateFutureDate,
  validateHorarioTrabajo,
  validateDiaLaborable,
  sanitizeInput,
  validateUserData,
  validateCitaData
};
