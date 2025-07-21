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
    contentStyle={{scrollbarWidth:'none'}}
    blockScroll
    className=" bg-white h-[90%] w-[25%] min-w-80 rounded-xl border border-gray-100 p-5"
    onHide={()=>setStatusPopUp(false)}
    onMaskClick={()=>setStatusPopUp(false)}
    >
        <section className="flex flex-col justify-between h-full gap-2" >
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl font-semibold px-8 text-center">Ticket de la cita</h1>
                <h3 className="flex items-center flex-col text-[12px] gap-1 px-8">
                    <FaLocationDot className="text-primary"/>
                    <span className="text-gray-500 text-center">Santo Domingo  Este,  Megacentro, Punto GOB.</span>
                </h3>
            </div>
           <article className="flex justify-center items-center gap-2 flex-col">

             <div className="flex flex-col items-center w-full md:w-[80%] gap-2">
                <div className="w-1/2 text-center">
                    <h3 className="font-semibold md:text-xl">Fecha</h3>
                    <span className="text-xs sm:text-[14px] text-gray-500">{Data?.Fecha?.Dia}</span>
                </div>
                <div className="w-1/2 text-center">
                    <h3 className="font-semibold md:text-xl">Hora</h3>
                    <span className="text-xs sm:text-[14px] text-gray-500">{Data?.Fecha?.hora}</span>
                </div>
            </div>

            <div className="flex flex-col items-center w-full md:w-[80%] gap-2">
                <div className="w-1/2 text-center">
                    <h3 className="font-semibold md:text-xl">Trámite</h3>
                    <span className=" text-xs sm:text-[14px] text-gray-500">{Data?.Servicios?.Nombre}</span>
                </div>
                <div className="w-1/2 text-center">
                    <h3 className="font-semibold md:text-xl">Nombre</h3>
                    <span className=" text-xs sm:text-[14px] text-gray-500">John Doe Genez</span>
                </div>
            </div>

           </article>
           <div className="flex justify-center">
            <QRCode value="kjvnijnfwvnasdokvnfod gnsifdngo "/>
           </div>
        </section>
    </Dialog>
  )
}
