'use client';
import { RiSearchLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { DataSearh } from "../data/DataSearch";
import { OptionSearh } from "../SubComponents/OptionSearch";
import { useSearch } from "../hook/useSearch";
        


//Javier no toque esto, voy a agregar nuevas funciones despues de que termine las demas partes
export default function SectionInputSearch() {


    
   

    const {
        InputSearhValue,
        BtnOptions,
        optionSearh,
        setInputSearhValue,
        ConseguirUbicacion
    } = useSearch();

    

 

  return (
<section className="lg:h-[40vh] " >
    <div  className="flex justify-center items-center flex-wrap py-10 gap-5 px-1 lg:px-0">
        <article className="flex flex-col relative">
            <div className=" flex items-center  flex-shrink-1 gap-1 lg:gap-5 p-2 sm:p-2 bg-[#F3F3F3] rounded-4xl h-15 transition-all duration-300 border border-gray-100">

            <span className=" p-1 flex-shrink-0 rounded-full h-10 w-10 flex justify-center items-center bg-[#0088FF]">
                <RiSearchLine className="text-white text-2xl"/>
            </span>
            <InputText  
            value={InputSearhValue}
            onChange={(e)=>setInputSearhValue(e.target.value)} 
            className={`outline-none h-[100%]  lg:w-100 min-w-30 sm:min-w-0 text-gray-600`} 
            placeholder="Buscador"/>

            <button 
            onClick={ConseguirUbicacion} 
            className="h-full px-2 sm:py-3 sm:px-5 rounded-3xl flex items-center gap-1 bg-white border border-gray-100 cursor-pointer hover:opacity-80 transition-all duration-300">
                 {InputSearhValue?.split('').length > 0 ?  ''  : <i className="text-gray-500 text-xs">¿Donde estas?</i>}
                <FaLocationDot className="text-[#0088FF] text-sm"/>
            </button>
            
            </div>
            <div className={`${optionSearh} absolute bg-[#F3F3F3] w-full rounded-2xl mt-16 px-1 py-1 border border-gray-100 shadow-2xs`}>
                <OptionSearh InputValue={InputSearhValue} BtnOptions={BtnOptions} />
            </div>
        </article>

        <button className="border py-3 px-10 rounded-4xl text-white bg-[#0088FF]">Agendar nueva cita</button>

    </div>
</section>
  )
}
