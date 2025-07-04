import { RiSearchLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";


//Javier no toque esto, voy a agregar nuevas funciones despues de que termine las demas partes
export default function SectionInputSearch() {
  return (
    <section className="lg:h-[50vh] " >
        <div  className="flex justify-center items-center flex-wrap py-10 gap-5 px-1 lg:px-0">
        <div className=" flex items-center flex-shrink-1 gap-1 lg:gap-5 p-2 sm:p-3 bg-[#F3F3F3] rounded-4xl h-15">
            <span className=" p-1 flex-shrink-0 rounded-[100%] h-10 w-10 flex justify-center items-center bg-[#0088FF]">
                <RiSearchLine className="text-white text-2xl"/>
            </span>
            <input type="text"  className="outline-0 h-[100%] min-w-30 sm:min-w-0" placeholder="Buscador"/>
            <button className=" px-1 sm:py-3 sm:px-5 rounded-3xl flex items-center gap-1 bg-white">
                <i className="text-gray-500">¿Donde estas?</i> 
                <FaLocationDot className="text-[#0088FF]"/>
            </button>
        </div>
        <div>
            <button className="border py-3 px-10 rounded-4xl text-white bg-[#0088FF]">Agendar nueva cita</button>
        </div>
        </div>
    </section>
  )
}
