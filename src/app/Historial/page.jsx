import React from 'react';
import Header from '../../../components/components - globals/Header';

const HistoricalData = () => {
  const services = [
    { id: 1, name: 'Cambio de cédula', date: 'Miércoles 15 de Mayo', time: '10:30 AM', status: 'Activa', ticket: 'Ver ticket' },
    { id: 2, name: 'Solicitar pasaporte', date: 'Martes 14 de Mayo', time: '09:30 AM', status: 'Fallido', ticket: 'Ver ticket' },
    { id: 3, name: 'Cambio de cédula', date: 'Miércoles 15 de Mayo', time: '10:30 AM', status: 'Procesado', ticket: 'Ver ticket' },
    { id: 4, name: 'Solicitar pasaporte', date: 'Martes 14 de Mayo', time: '09:30 AM', status: 'Fallido', ticket: 'Ver ticket' },
    { id: 5, name: 'Cambio de cédula', date: 'Miércoles 15 de Mayo', time: '10:30 AM', status: 'Activa', ticket: 'Ver ticket' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Activa':
        return 'bg-blue-100 text-blue-800';
      case 'Fallido':
        return 'bg-red-100 text-red-800';
      case 'Procesado':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section>
        <Header/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Historial</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Servicios</th>
              <th className="py-3 px-6 text-left">Fecha</th>
              <th className="py-3 px-6 text-left">Estado</th>
              <th className="py-3 px-6 text-left">Tickets</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {services.map((service) => (
              <tr key={service.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="text-xs text-gray-500">Junta Central Electoral</div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex flex-col">
                    <span className="font-medium">{service.date}</span>
                    <span className="text-xs text-gray-500">{service.time}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">
                  <button className="text-indigo-600 hover:text-indigo-900">{service.ticket}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</section>
  );
};

export default HistoricalData;
