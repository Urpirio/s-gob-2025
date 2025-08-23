'use client';
import { useState, useEffect } from 'react';

export default function Setup() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const checkDatabase = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/setup');
      const data = await response.json();
      setStatus(data);
      
      if (data.status === 'success' && data.database_info.institutions > 0) {
        setInitialized(true);
      }
    } catch (error) {
      setStatus({
        status: 'error',
        message: 'Error conectando con el servidor'
      });
    }
    setLoading(false);
  };

  const initializeDatabase = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/setup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'initialize' }),
      });
      
      const data = await response.json();
      setStatus(data);
      
      if (data.status === 'success') {
        setInitialized(true);
      }
    } catch (error) {
      setStatus({
        status: 'error',
        message: 'Error inicializando la base de datos'
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    checkDatabase();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Configuración del Sistema de Citas
          </h1>

          <div className="space-y-6">
            {/* Estado de la conexión */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Estado de la Base de Datos</h2>
                <button
                  onClick={checkDatabase}
                  disabled={loading}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {loading ? 'Verificando...' : 'Verificar Conexión'}
                </button>
              </div>

              {status && (
                <div className={`p-4 rounded-lg ${
                  status.status === 'success' 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center mb-2">
                    <span className={`w-3 h-3 rounded-full mr-2 ${
                      status.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    <span className="font-medium">{status.message}</span>
                  </div>

                  {status.database_info && (
                    <div className="mt-4 text-sm text-gray-600">
                      <p>Instituciones: {status.database_info.institutions}</p>
                      <p>Servicios: {status.database_info.services}</p>
                      <p>Puntos GOB: {status.database_info.puntos_gob}</p>
                    </div>
                  )}

                  {status.missing_tables && (
                    <div className="mt-4">
                      <p className="text-red-600 font-medium">Tablas faltantes:</p>
                      <ul className="list-disc list-inside text-sm text-red-600">
                        {status.missing_tables.map(table => (
                          <li key={table}>{table}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {status.suggestions && (
                    <div className="mt-4">
                      <p className="font-medium">Sugerencias:</p>
                      <ul className="list-disc list-inside text-sm">
                        {status.suggestions.map((suggestion, index) => (
                          <li key={index}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {status.credentials && (
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="font-medium text-yellow-800 mb-2">Credenciales de acceso:</p>
                      <div className="text-sm space-y-2">
                        <div>
                          <strong>Administrador:</strong><br/>
                          Email: {status.credentials.admin.email}<br/>
                          Contraseña: {status.credentials.admin.password}
                        </div>
                        <div>
                          <strong>Usuario de prueba:</strong><br/>
                          Email: {status.credentials.user.email}<br/>
                          Cédula: {status.credentials.user.cedula}<br/>
                          Contraseña: {status.credentials.user.password}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Inicializar datos */}
            {status?.status === 'success' && !initialized && (
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Inicializar Datos de Ejemplo</h2>
                <p className="text-gray-600 mb-4">
                  La base de datos está conectada pero no tiene datos iniciales. 
                  Haz clic para crear instituciones, servicios y usuarios de ejemplo.
                </p>
                <button
                  onClick={initializeDatabase}
                  disabled={loading}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
                >
                  {loading ? 'Inicializando...' : 'Inicializar Datos'}
                </button>
              </div>
            )}

            {/* Sistema listo */}
            {initialized && (
              <div className="border rounded-lg p-6 bg-green-50 border-green-200">
                <h2 className="text-xl font-semibold text-green-800 mb-4">
                  ✅ Sistema Configurado Correctamente
                </h2>
                <p className="text-green-700 mb-4">
                  La base de datos está configurada y lista para usar. 
                  Puedes acceder a las siguientes páginas:
                </p>
                <div className="space-y-2">
                  <a href="/" className="block text-blue-600 hover:underline">
                    🏠 Página Principal
                  </a>
                  <a href="/Login" className="block text-blue-600 hover:underline">
                    🔐 Iniciar Sesión
                  </a>
                  <a href="/Registro" className="block text-blue-600 hover:underline">
                    📝 Registrarse
                  </a>
                  <a href="/AgendarCita" className="block text-blue-600 hover:underline">
                    📅 Agendar Cita
                  </a>
                </div>
              </div>
            )}

            {/* Instrucciones */}
            <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Instrucciones</h2>
              <div className="text-blue-700 space-y-2 text-sm">
                <p><strong>1.</strong> Asegúrate de que XAMPP esté ejecutándose con Apache y MySQL activos</p>
                <p><strong>2.</strong> Verifica que la base de datos 'citas_gob' existe en phpMyAdmin</p>
                <p><strong>3.</strong> Si no has ejecutado el schema, importa el archivo 'citas_gob_schema.sql'</p>
                <p><strong>4.</strong> Configura las variables de entorno en el archivo '.env.local'</p>
                <p><strong>5.</strong> Una vez todo configurado, inicializa los datos de ejemplo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
