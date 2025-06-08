import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardComentarios from "../SubComponents/Card-comentarios";

export default function SectionComentarios() {
    return(
        <section className="py-10 flex flex-col gap-10">
            <div className="text-center">
                <h1 className="text-4xl">“Transformando el servicio contigo”</h1>
            </div>
           <div className="w-[100%] flex justify-center gap-10">
            <div className="flex items-center">
                <button className="text-6xl text-[#007AFF]"><IoIosArrowBack/></button>
            </div>
             <div  className="flex justify-start gap-5 ">
                <CardComentarios/>
                <CardComentarios/>
                <CardComentarios/>
            </div>
            <div className="flex items-center" >
                <button className="text-6xl text-[#007AFF]"><IoIosArrowForward/></button>
            </div>
           </div>
           
        </section>
    )
}