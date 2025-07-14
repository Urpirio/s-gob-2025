'use client';
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { FaLocationDot } from "react-icons/fa6";
import QRCode from "react-qr-code";

export let DeployPop_Up_Ticket;
export default function Pop_Up_Ticket({Data}) {

    const [StatusPopUp,setStatusPopUp] = useState(false);
    DeployPop_Up_Ticket = setStatusPopUp;

  return (
    <Dialog 
    visible={StatusPopUp}
    closeIcon={true}
    maskClassName="backdrop-blur-xs"
    contentClassName=""
    blockScroll
    className=" bg-white h-[70%] w-[25%] rounded-xl border border-gray-100 p-5"
    onHide={()=>setStatusPopUp(false)}
    onMaskClick={()=>setStatusPopUp(false)}
    >
        <section className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-semibold px-8">Ticket de la cita</h1>
                <h3 className="flex items-center text-[12px] gap-1 px-8">
                    <FaLocationDot className="text-primary"/>
                    <span className="text-gray-500 ">Santo Domingo  Este,  Megacentro, Punto GOB.</span>
                </h3>
            </div>
           <article className="flex justify-center items-center gap-2 flex-col">
             <div className="flex justify-between w-[80%] gap-2">
                <div className="w-1/2">
                    <h3 className="font-semibold text-xl">Fecha</h3>
                    <span className="text-gray-500">{Data?.Fecha?.Dia}</span>
                </div>
                <div className="w-1/2">
                    <h3 className="font-semibold text-xl">Hora</h3>
                    <span className="text-gray-500">{Data?.Fecha?.hora}</span>
                </div>
            </div>
            <div className="flex justify-between w-[80%] gap-2">
                <div className="w-1/2">
                    <h3 className="font-semibold text-xl">Trámite</h3>
                    <span className="text-gray-500">{Data?.Servicios?.Nombre}</span>
                </div>
                <div className="w-1/2">
                    <h3 className="font-semibold text-xl">Nombre</h3>
                    <span className="text-gray-500">John Doe Genez</span>
                </div>
            </div>
           </article>
           <div className="flex justify-center">
            <QRCode value="hola"/>
           </div>
        </section>
    </Dialog>
  )
}
