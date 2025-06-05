import { FaBuildingUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export const DataCardRegistro = [
    {
        key: 1,
        Icon: <FaBuildingUser/>,
        Titulo: 'Institucion',
        Descripcion: `Como institucion podras registrar
        tus servicios y tener acceso a las herramientas
        de la plaaformma`,
    },
    {
        key: 2,
        Icon: <FaUser className="text-3xl"/>,
        Titulo: 'Persona',
        Descripcion: `Podras aceder a todos los servicios
        de la plataforma, historial de gestiones e informacion
        guardada.`,
    }
]