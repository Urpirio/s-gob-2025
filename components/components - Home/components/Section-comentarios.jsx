import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Comentarios from "../SubComponents/Card-comentarios";

export default function SectionComentarios() {
    return(
        <article className="flex gap-8 md:gap-20 pt-10 shadow-2xl flex-col h-auto min-h-[90vh] bg-white rounded-3xl border border-blue-100">
         <h1 className="text-center text-5xl md:text-5xl  text-blue-600 mb-6 tracking-tight drop-shadow">Transformando el servicio contigo</h1>
        <section className="flex flex-col md:flex-row w-full items-center justify-between gap-8 md:gap-0 px-4 md:px-0">
            <span className="transition hover:scale-110 active:scale-95 cursor-pointer rounded-full p-1  shadow-md">
                <FaArrowLeft className="w-10 h-10 md:w-[60px] md:h-[60px] text-blue-500" />
            </span>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full justify-center items-center">
                <Comentarios />
                <Comentarios />
                <Comentarios />
            </div>

            
            <span className="transition hover:scale-110 active:scale-95 cursor-pointer rounded-full p-2  shadow-md">
                <FaArrowRight className="w-10 h-10 md:w-[60px] md:h-[60px] text-blue-500" />
            </span>
        </section>
    </article>
    )
}