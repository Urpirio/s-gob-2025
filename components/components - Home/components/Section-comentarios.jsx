import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardComentarios from "../SubComponents/Card-comentarios";
//Javier no toques nada 
export default function SectionComentarios() {
    return(
        <section className="py-10 flex flex-col gap-10">
            <div className="text-center">
                <h1 className="text-4xl">“Transformando el servicio contigo”</h1>
            </div>
           <div className="w-[100%] flex justify-around items-center lg:justify-center relative gap-10">
            <div className="flex items-center w-full h-full lg:w-[10%] justify-start absolute lg:relative">
                <button className="text-6xl text-[#007AFF]"><IoIosArrowBack/></button>
            </div>
             <div  className="flex justify-center md:justify-start overflow-auto     scrollbar-hide gap-5">
                <CardComentarios/>
            </div>
            <div className="flex items-center w-full h-full lg:w-[10%] justify-end absolute lg:relative" >
                <button className="text-6xl text-[#007AFF]"><IoIosArrowForward/></button>
            </div>
           </div>     
        </section>
    )
}