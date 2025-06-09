import { IoSyncSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";


export const DataHistorial = [
    { 
        id: 1, 
        name: 'Cambio de cédula', 
        date: 'Miércoles 15 de Mayo', 
        time: '10:30 AM', 
        status: 'Activa', 
        icon: <FaCheck />,
        ticket: 'Ver ticket' },
    { 
        id: 2, 
        name: 'Solicitar pasaporte', 
        date: 'Martes 14 de Mayo', 
        time: '09:30 AM', 
        status: 'Fallido', 
        icon: <FaXmark />,
        ticket: 'Ver ticket' },

    { 
        id: 3, 
        name: 'Cambio de cédula', 
        date: 'Miércoles 15 de Mayo', 
        time: '10:30 AM', 
        status: 'Procesado', 
        icon:<IoSyncSharp />,
        ticket: 'Ver ticket' },
    { 
        id: 4, 
        name: 'Solicitar pasaporte', 
        date: 'Martes 14 de Mayo', 
        time: '09:30 AM', 
        status: 'Fallido', 
        ticket: 'Ver ticket' 
    },
    { 
        id: 5, 
        name: 'Cambio de cédula', 
        date: 'Miércoles 15 de Mayo', 
        time: '10:30 AM', 
        status: 'Activa', 
        ticket: 'Ver ticket' 
    },
  ];