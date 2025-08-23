import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Hook personalizado para autenticación
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Verificar si hay un token guardado en localStorage
    const savedToken = localStorage.getItem('auth_token');
    const savedUser = localStorage.getItem('user_data');

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (identifier, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('user_data', JSON.stringify(data.user));
        return { success: true, data };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('user_data', JSON.stringify(data.user));
        return { success: true, data };
      } else {
        return { success: false, error: data.error, details: data.details };
      }
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  };

  return {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };
}

// Hook para obtener instituciones
export function useInstituciones() {
  const [instituciones, setInstituciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstituciones = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/instituciones`);
        const data = await response.json();

        if (response.ok) {
          setInstituciones(data.instituciones);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Error obteniendo instituciones');
      } finally {
        setLoading(false);
      }
    };

    fetchInstituciones();
  }, []);

  return { instituciones, loading, error };
}

// Hook para obtener servicios
export function useServicios(institucionId = null, puntoGobId = null) {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const params = new URLSearchParams();
        if (institucionId) params.append('institucion_id', institucionId);
        if (puntoGobId) params.append('punto_gob_id', puntoGobId);

        const response = await fetch(`${API_BASE_URL}/servicios?${params}`);
        const data = await response.json();

        if (response.ok) {
          setServicios(data.servicios);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Error obteniendo servicios');
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, [institucionId, puntoGobId]);

  return { servicios, loading, error };
}

// Hook para obtener puntos GOB
export function usePuntosGob(provincia = null) {
  const [puntosGob, setPuntosGob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPuntosGob = async () => {
      try {
        const params = new URLSearchParams();
        if (provincia) params.append('provincia', provincia);

        const response = await fetch(`${API_BASE_URL}/puntos-gob?${params}`);
        const data = await response.json();

        if (response.ok) {
          setPuntosGob(data.puntos_gob);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Error obteniendo puntos GOB');
      } finally {
        setLoading(false);
      }
    };

    fetchPuntosGob();
  }, [provincia]);

  return { puntosGob, loading, error };
}

// Hook para obtener citas del usuario
export function useCitas(token, estado = null) {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchCitas = async () => {
      try {
        const params = new URLSearchParams();
        if (estado) params.append('estado', estado);

        const response = await fetch(`${API_BASE_URL}/citas?${params}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (response.ok) {
          setCitas(data.citas);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Error obteniendo citas');
      } finally {
        setLoading(false);
      }
    };

    fetchCitas();
  }, [token, estado]);

  const crearCita = async (citaData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/citas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(citaData),
      });

      const data = await response.json();

      if (response.ok) {
        setCitas(prev => [data.cita, ...prev]);
        return { success: true, data };
      } else {
        return { success: false, error: data.error, details: data.details };
      }
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  };

  const cancelarCita = async (citaId, motivo) => {
    try {
      const response = await fetch(`${API_BASE_URL}/citas/${citaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          accion: 'cancelar', 
          motivo 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCitas(prev => 
          prev.map(cita => 
            cita.id === citaId 
              ? { ...cita, estado: 'Cancelada', motivo_cancelacion: motivo }
              : cita
          )
        );
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  };

  const calificarCita = async (citaId, calificacion, comentario) => {
    try {
      const response = await fetch(`${API_BASE_URL}/citas/${citaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          accion: 'calificar', 
          calificacion,
          comentario 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCitas(prev => 
          prev.map(cita => 
            cita.id === citaId 
              ? { ...cita, calificacion_servicio: calificacion, comentario_calificacion: comentario }
              : cita
          )
        );
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  };

  return { 
    citas, 
    loading, 
    error, 
    crearCita, 
    cancelarCita, 
    calificarCita 
  };
}

// Hook para tickets de soporte
export function useSoporte(token) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchTickets = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/soporte`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (response.ok) {
          setTickets(data.tickets);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Error obteniendo tickets');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [token]);

  const crearTicket = async (ticketData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/soporte`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(ticketData),
      });

      const data = await response.json();

      if (response.ok) {
        setTickets(prev => [data.ticket, ...prev]);
        return { success: true, data };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Error de conexión' };
    }
  };

  return { tickets, loading, error, crearTicket };
}
