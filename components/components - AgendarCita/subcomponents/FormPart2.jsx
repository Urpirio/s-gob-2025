import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { InputText } from "primereact/inputtext";




export default function FormPart2({InputValues,setInputValues}) {


  return (
    <div className="flex flex-col gap-5 w-[25%] justify-between  min-w-80">
        <div>
            <Link href={'/Servicios'} className="flex items-center gap-2 text-2xl ">
                <FaArrowLeft className="text-[#0088FF]"/>
                <span className="text-gray-400">Volver</span>
            </Link>
        </div>
        <div>
            <h1 className="text-4xl text-[#0088FF]">Agenda tu cita</h1>
        </div>
         <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Cedula</label>
            <div className="flex items-center justify-between gap-2">
                <InputText 
                value={InputValues.Cedula} 
                onChange={(e)=>setInputValues({...InputValues,Cedula:e.target.value})}
                type="text" 
                placeholder="000-0000000-0" 
                className="border border-gray-300 py-3.5 px-3 w-full rounded-md bg-gray-50"/>
                <button className="border py-3.5 px-3 rounded-md bg-primary text-white hover:opacity-80 cursor-pointer transition-all duration-200">Buscar</button>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Nombres</label>
            <InputText 
            value={InputValues.Nombres}
            onChange={(e)=>setInputValues({...InputValues,Nombres:e.target.value})}
            type="text" 
            placeholder="Nombres" 
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Correo electronico</label>
            <InputText 
            value={InputValues.Correo} 
            onChange={(e)=>setInputValues({...InputValues,Correo:e.target.value})}
            type="text" 
            placeholder="Ejemplo@gmail.com" 
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
       
        <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Direccion</label>
            <InputText 
                value={InputValues.Direccion}
                onChange={(e)=>setInputValues({...InputValues,Direccion:e.target.value})}
                type="text" 
                placeholder="Calle ej. #1, Provincia, Pais. " 
                className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50" />
        </div>
    </div>
  )
}
