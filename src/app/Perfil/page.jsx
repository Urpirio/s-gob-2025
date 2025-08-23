'use client';
import { useAuth, useCitas } from "../../../hooks/useApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../../../components/components - globals/components/Header";
import Footer from "../../../components/components - globals/components/Footer";

export default function Perfil() {
  const { user, token, isAuthenticated, logout } = useAuth();
  const { citas, loading, cancelarCita, calificarCita } = useCitas(token);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push('/Login');
    }
  }, [isAuthenticated, loading, router]);

  const handleCancelarCita = async (citaId) => {
    const motivo = prompt('¿Por qué quieres cancelar esta cita?');
    if (motivo) {
      const result = await cancelarCita(citaId, motivo);
      if (result.success) {
        alert('Cita cancelada exitosamente');
      } else {
        alert('Error al cancelar: ' + result.error);
      }
    }
  };

  const handleCalificarCita = async (citaId) => {
    const calificacion = prompt('Califica el servicio (1-5):');
    const comentario = prompt('Comentario (opcional):');
    
    if (calificacion && calificacion >= 1 && calificacion <= 5) {
      const result = await calificarCita(citaId, parseInt(calificacion), comentario);
      if (result.success) {
        alert('Calificación registrada exitosamente');
      } else {
        alert('Error al calificar: ' + result.error);
      }
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Cargando...</div>
      </div>
    );
  }

  return (
    <body>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header del perfil */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {user?.nombres} {user?.apellidos}
                </h1>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-gray-600">Cédula: {user?.cedula}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  user?.tipo_usuario === 'Nuevo' ? 'bg-blue-100 text-blue-800' : 
                  user?.tipo_usuario === 'Recurrente' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {user?.tipo_usuario}
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => router.push('/AgendarCita')}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Nueva Cita
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>

          {/* Lista de citas */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Mis Citas</h2>
            
            {loading ? (
              <div className="text-center py-8">Cargando citas...</div>
            ) : citas.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No tienes citas agendadas
              </div>
            ) : (
              <div className="space-y-4">
                {citas.map((cita) => (
                  <div key={cita.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-lg font-semibold">{cita.servicio_nombre}</h3>
                          <span className={`px-2 py-1 rounded text-sm ${
                            cita.estado === 'Activa' ? 'bg-green-100 text-green-800' :
                            cita.estado === 'Procesada' ? 'bg-blue-100 text-blue-800' :
                            cita.estado === 'Cancelada' ? 'bg-red-100 text-red-800' :
                            cita.estado === 'Fallida' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {cita.estado}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <p><strong>Número:</strong> {cita.numero_cita}</p>
                            <p><strong>Fecha:</strong> {cita.fecha_cita}</p>
                            <p><strong>Hora:</strong> {cita.hora_cita}</p>
                          </div>
                          <div>
                            <p><strong>Institución:</strong> {cita.institucion_nombre}</p>
                            <p><strong>Punto GOB:</strong> {cita.punto_gob_nombre}</p>
                            <p><strong>Dirección:</strong> {cita.punto_gob_direccion}</p>
                          </div>
                        </div>

                        {cita.ticket_confirmacion && (
                          <p className="mt-2 text-sm">
                            <strong>Ticket:</strong> {cita.ticket_confirmacion}
                          </p>
                        )}

                        {cita.calificacion_servicio && (
                          <div className="mt-2">
                            <p className="text-sm">
                              <strong>Calificación:</strong> {'⭐'.repeat(cita.calificacion_servicio)}
                            </p>
                            {cita.comentario_calificacion && (
                              <p className="text-sm text-gray-600">{cita.comentario_calificacion}</p>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        {cita.estado === 'Activa' && (
                          <button
                            onClick={() => handleCancelarCita(cita.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                          >
                            Cancelar
                          </button>
                        )}
                        
                        {cita.estado === 'Procesada' && !cita.calificacion_servicio && (
                          <button
                            onClick={() => handleCalificarCita(cita.id)}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                          >
                            Calificar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}
