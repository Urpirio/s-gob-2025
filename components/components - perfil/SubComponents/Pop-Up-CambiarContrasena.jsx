'use client';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";


export let DeployPop_Up_CambiarContrasena;
export default function Pop_Up_CambiarContrasena() {

    const [StatusPopUp,setStatusPopUp] = useState(false);
    DeployPop_Up_CambiarContrasena = setStatusPopUp;


  return (
    <Dialog 
    visible={StatusPopUp}
    className=" w-[40%]  bg-white rounded-2xl border border-gray-100 p-10 "
    maskClassName="backdrop-blur-xs"
    contentClassName=""
    blockScroll
    closeIcon={true}
    onHide={()=>setStatusPopUp(false)}
    >
        <section className="w-full h-full flex gap-5 flex-col justify-between ">
            <div className=" text-center">
                <h2 className="text-3xl text-primary font-semibold">Cambiar contraseña</h2>
            </div>
            <div className="w-full flex flex-grow items-center">
                <InputText 
                placeholder=" Contraseña anterior"
                className="w-full p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0"/>
            </div>
            <div className="w-full flex flex-grow items-center">
                <InputText 
                placeholder="Nueva contraseña"
                className="w-full p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0"
                />
            </div>
            <div className="w-full flex flex-grow items-center">
                <InputText 
                placeholder="Confirmar nueva contraseña"
                className="w-full p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0"
                />
            </div>
            <div className="w-full flex flex-grow justify-between">
                <button 
                onClick={()=>setStatusPopUp(false)}
                className="px-5 border border-gray-100 text-gray-800 rounded-md p-2 cursor-pointer hover:opacity-80 transition-all duration-300">Cancelar</button>
                <button className="px-5 bg-primary rounded-md p-2 text-white cursor-pointer hover:opacity-80 transition-all duration-300">Confirmar cambios</button>
            </div>
        </section>
    </Dialog>
  )
}
