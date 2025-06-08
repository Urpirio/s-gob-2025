import { FaArrowLeft } from "react-icons/fa6";


export default function FormPart2() {
  return (
    <div className="flex flex-col gap-5 w-[25%]">
        <div>
            <button className="flex items-center gap-2 text-2xl ">
                <FaArrowLeft className="text-[#0088FF]"/>
                <span className="text-gray-400">Volver</span>
            </button>
        </div>
        <div>
            <h1 className="text-4xl text-[#0088FF]">Agenda tu cita</h1>
        </div>
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Tramite</label>
            <input type="text" placeholder="Por defecto"  className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]"/>
        </div>
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Nombres</label>
            <input type="text" placeholder="John Doe" className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]"/>
        </div>
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Correo electronico</label>
            <input type="text" placeholder="johndoe@gmail.com" className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]"/>
        </div>
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Cedula</label>
            <input type="text" placeholder="000-0000000-0" className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]"/>
        </div>
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Direccion</label>
            <input type="text" placeholder="Calle ej. #1, Provincia, Pais. " className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]" />
        </div>
    </div>
  )
}
