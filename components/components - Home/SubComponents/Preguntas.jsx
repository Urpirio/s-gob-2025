import { IoIosArrowForward } from "react-icons/io";
import { DataPreguntas } from "../data/DataPreguntas";

export default function Preguntas() {
  const preguntas = DataPreguntas.map(Data =>{
    return (
    <div key={Data.key} className="w-[85%]">
        <button className="
        border 
        flex 
        items-center 
        p-2 
        w-[100%] 
        justify-between
        rounded-md
        text-[18px]
        bg-[#F4F4F4]
        border-[#F4F4F4]
        ">
          <span className="font-normal" >{Data.Pregunta}</span>
          <IoIosArrowForward className=" text-3xl text-[#007AFF]"/>
        </button>
        <div className="hidden">
          <p>{Data.Respuesta}</p>
        </div>
    </div>
  )
  })

  return(preguntas)
}
