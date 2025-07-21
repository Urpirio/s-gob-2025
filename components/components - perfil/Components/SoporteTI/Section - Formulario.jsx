'use client'
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { DataDropDown_Asunto } from "../../Data/SoporteTI/DataDropDown - Asunto";
import { useState } from "react";

export default function SectionFormulario() {

    const [InputValues,setInputValues] = useState({
        NombreCompleto: String(),
        Correo: String(),
        Descripcion: String(),
    });

    const [DropdownValues,setDroDropdownValues] = useState({
        Asunto: String(),
    });

  return (
    <section className="w-1/3  min-w-90">
        <div className="flex flex-col gap-3 border border-gray-100 p-5 rounded-2xl shadow-xs shadow-primary/50">
            <div className="flex flex-col">
                <label>Nombre completo</label>
                <InputText 
                value={InputValues.NombreCompleto}
                onChange={(e)=>setInputValues({...InputValues,NombreCompleto:e.target.value})}
                className="w-full p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0"/>
            </div>
            <div className="flex flex-col">
                <label>Correo electrónico</label>
                <InputText 
                value={InputValues.Correo}
                onChange={(e)=>setInputValues({...InputValues,Correo:e.target.value})}
                className="w-full p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0"/>
            </div>
            <div className="flex flex-col">
                <label>Asunto</label>
                <Dropdown 
                options={DataDropDown_Asunto}
                optionLabel="Asunto"
                value={DropdownValues.Asunto}
                onChange={(e)=>setDroDropdownValues({...DropdownValues,Asunto:e.target.value})}
                placeholder="Seleccionar asunto" 
                panelClassName="[&_li]:hover:border p-1 border  [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
                className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
            </div>
            <div className="flex flex-col">
                <label>Descripción</label>
                <InputTextarea 
                value={InputValues.Descripcion}
                onChange={(e)=>setInputValues({...InputValues,Descripcion:e.target.value})}
                className="w-full p-3 h-30 resize-none  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0"/>
            </div>
            <div className="flex justify-end">
                <button className=" border py-2 px-5 rounded-md bg-primary text-white cursor-pointer hover:opacity-80 transition-all duration-300">Enviar ticket</button>
            </div>
        </div>
    </section>
  )
};
