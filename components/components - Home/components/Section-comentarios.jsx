import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Comentarios from "../SubComponents/Card-comentarios";

export default function SectionComentarios() {
    return(
        <article className="flex gap-20 pt-10 shadow-lg flex-col h-[90vh]">
         <h1 className="text-center text-5xl">Transformando el servicio contigo </h1>
        <section className="flex w-full  items-center justify-between">
            <FaArrowLeft className="w-[60px] h-[60px] text-blue-500 text-2xl" />
            <Comentarios />
            <Comentarios/>
            <Comentarios/>
            <FaArrowRight className="w-[60px] h-[60px] text-blue-500 text-2xl" />
        </section>
    </article>
    )
}