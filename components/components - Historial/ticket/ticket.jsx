import React, { useState } from 'react';

const TicketComponent = () => {
  const [showTicket, setShowTicket] = useState(true);

  const toggleTicket = () => {
    setShowTicket(!showTicket);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ticket de la cita</h1>
      {/* <button
        onClick={toggleTicket}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver Ticket
      </button> */}

      {showTicket && (
        <div id="ticket" className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Detalles del Ticket</h2>
          <p><strong>Fecha:</strong> 09092024</p>
          <p><strong>Hora:</strong> 00:00</p>
          <p><strong>Nombre:</strong> John Doe</p>
          <p><strong>Trámite:</strong> Cambio de cédula</p>
          <img src="https://via.placeholder.com/150" alt="Código QR" className="mt-2" />
        </div>
      )}
    </div>
  );
};

export default TicketComponent;
