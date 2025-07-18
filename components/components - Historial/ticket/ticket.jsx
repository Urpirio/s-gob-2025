'use client'
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import QRCode from "react-qr-code";

const TicketComponent = ({ onClose }) => {
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={handleModalClick}
        className="bg-white rounded-xl shadow-lg w-[300px] h-[480px] max-w-sm p-6 relative text-center animate-fade-in-down"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-2">Ticket de la cita</h2>

        {/* Ubicación */}
        <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
          <FaMapMarkerAlt className="mr-1 text-blue-500" />
          Santo Domingo Este, Megacentro, Punto GOB.
        </div>

        {/* Info del ticket */}
        <div className="grid grid-cols-2 gap-3 text-sm text-left mb-4">
          <div>
            <p className="text-gray-600 font-medium">Fecha</p>
            <p className="text-black">00/00/0000</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Hora</p>
            <p className="text-black">00:00</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Trámite</p>
            <p className="text-black">Cambio de cédula</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Nombre</p>
            <p className="text-black">John Doe Genez</p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center bg-white p-3">
          <QRCode value="" className="" size={200} />
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
