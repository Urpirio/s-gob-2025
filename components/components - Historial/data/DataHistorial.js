import { MdDateRange, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { LuTickets } from "react-icons/lu";



export const DataHistorial = [
    { 
        id: 1, 
        name: (
            <>
                <MdOutlineCheckBoxOutlineBlank className="text-blue-700 mr-1" />
                Cambio de Cédula
            </>
        ),
        date: (
            <>
                <MdDateRange className="text-blue-700 mr-1" />
                Miércoles 15 de Mayo
            </>
        ),
        time: (
            <>
                <GoClock className="text-blue-700 mr-1" />
                10:30 AM
            </>
        ),
        status: 'Activa',
        ticket: (
            <>
                <LuTickets className="text-blue-700 mr-1" />
                Ver ticket
            </>
        )
    },
    { 
        id: 2, 
        name: (
            <>
                <MdOutlineCheckBoxOutlineBlank className="text-blue-700 mr-2" />
                Solicitar pasaporte
            </>
        ),
        date: (
            <>
                <MdDateRange className="text-blue-700 mr-1" />
                Miércoles 15 de Julio
            </>
        ),
        time: (
            <>
                <GoClock className="text-blue-700 mr-1" />
                10:30 AM
            </>
        ),
        status: 'Fallido',
        ticket: (
            <>
                <LuTickets className="text-blue-700 mr-1" />
                Ver ticket
            </>
        )
    },
    { 
        id: 3, 
        name: (
            <>
                <MdOutlineCheckBoxOutlineBlank className="text-blue-700 mr-2" />
                Solicitar Cédula
            </>
        ),
        date: (
            <>
                <MdDateRange className="text-blue-700 mr-1" />
                Miércoles 15 de Mayo
            </>
        ),
        time: (
            <>
                <GoClock className="text-blue-700 mr-1" />
                11:20 AM
            </>
        ),
        status: 'Procesado',
        ticket: (
            <>
                <LuTickets className="text-blue-700 mr-1" />
                Ver ticket
            </>
        )
    },
    { 
        id: 4, 
        name: (
            <>
                <MdOutlineCheckBoxOutlineBlank className="text-blue-700 mr-2" />
                Solicitar pasaporte
            </>
        ),
        date: (
            <>
                <MdDateRange className="text-blue-700 mr-1" />
                Miércoles 15 de Mayo
            </>
        ),
        time: (
            <>
                <GoClock className="text-blue-700 mr-1" />
                10:30 AM
            </>
        ),
        status: 'Fallido',
        ticket: (
            <>
                <LuTickets className="text-blue-700 mr-1" />
                Ver ticket
            </>
        )
    },
    { 
        id: 5, 
        name: (
            <>
                <MdOutlineCheckBoxOutlineBlank className="text-blue-700 mr-2" />
                Cambio de Cédula
            </>
        ),
        date: (
            <>
                <MdDateRange className="text-blue-700 mr-1" />
                Miércoles 15 de Mayo
            </>
        ),
        time: (
            <>
                <GoClock className="text-blue-700 mr-1" />
                10:30 AM
            </>
        ),
        status: 'Activa',
        ticket: (
            <>
                <LuTickets className="text-blue-700 mr-1" />
                Ver ticket
            </>
        )
    },
  ];