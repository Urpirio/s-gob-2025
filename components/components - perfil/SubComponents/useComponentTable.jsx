'use client';
import { TfiReload } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { LuTickets } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import Pop_Up_Ticket, { DeployPop_Up_Ticket } from "./Pop-Up-Ticket";

export const useComponentsTable = () =>{

    const ServiciosC = ({D}) =>{
        return <div className='flex flex-col w-50'>
            <span className="font-semibold">
                {D?.Servicios?.Nombre}
            </span>
            <span className="text-gray-400 text-xs ">
                {D?.Servicios?.Institucion}
            </span>
        </div>
    };

    const FechaC = ({D}) =>{
        return <div className='flex flex-col w-70'>
            <span className="text-md font-semibold flex items-center gap-1 ">
                <IoCalendarOutline className="text-primary"/>
                {D?.Fecha?.Dia}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1 ">
                <CiClock2 className="text-primary"/>
                {D?.Fecha?.hora}
            </span>
         </div>
    };

    const EstadoC = ({Estado}) =>{
        switch(Estado){
            case 'Activo':
                return <div className="flex w-36">
                    <div className='flex bg-[#0088FF33] text-primary items-center justify-between border-0 font-semibold px-3 text-md  py-1 gap-2 rounded-2xl'>
                    <span>{Estado}</span>
                    <TfiReload/>
                    </div>
                </div>
            case 'Fallido':
                return <div className="flex w-36">
                    <div className='flex bg-[#EE020233] text-[#EE02028F] items-center justify-between border-0 font-semibold px-3 text-md  py-1 gap-2 rounded-2xl'>
                    <span>{Estado}</span>
                    <IoCloseSharp/>
                    </div>
                </div>
            case 'Procesado':
                return <div className="flex w-36">
                    <div className='flex bg-[#66EA5F66] text-green-500 items-center justify-between border-0 font-semibold px-3 text-md  py-1 gap-2 rounded-2xl'>
                    <span>{Estado}</span>
                    <IoMdCheckmark/>
                    </div>
                </div>
            default:
                return <div/>
        }
    };

    const Tickets = ({Data}) =>{
        return <div>
            <button 
            onClick={()=>DeployPop_Up_Ticket(true)}
            className="flex items-center border border-gray-100 gap-2 text-primary px-3 py-1 rounded-md bg-gray-50 cursor-pointer hover:opacity-80 transition-all duration-300">
            <LuTickets/>
            <span>Ver ticket </span>
        </button>
        <Pop_Up_Ticket Data={Data}/>
        </div>
    };


    return({
        EstadoC,
        ServiciosC,
        FechaC,
        Tickets
    })
}