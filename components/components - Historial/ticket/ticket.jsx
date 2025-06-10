import React from 'react';
import PropTypes from 'prop-types';

const Ticket = ({ fecha, hora, tramite, nombre }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Ticket de la cita</h2>
        <div className="flex items-center">
          <svg className="w-4 h-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-sm">Santo Domingo, Este, Megacentro, Punto GOB</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-500">Fecha</p>
          <p className="font-medium">{fecha}</p>
        </div>
        <div>
          <p className="text-gray-500">Hora</p>
          <p className="font-medium">{hora}</p>
        </div>
        <div>
          <p className="text-gray-500">Trámite</p>
          <p className="font-medium">{tramite}</p>
        </div>
        <div>
          <p className="text-gray-500">Nombre</p>
          <p className="font-medium">{nombre}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
          alt="QR Code"
          className="w-32 h-32"
        />
      </div>
    </div>
  );
};
Ticket.propTypes = {
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  tramite: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
};

export default Ticket;
