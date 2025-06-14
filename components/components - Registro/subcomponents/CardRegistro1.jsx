
import { DataCardRegistro } from "../data/DataCardRegistro";

export default function CardRegistro1() {
  const Cards = DataCardRegistro.map(Data =>{
    return (
    <article key={Data.key} className="
    border 
    flex 
    flex-col  
    border-gray-300 
    w-100 
    rounded-xl 
    p-5
    shadow-md
    ">
        <div className="flex items-center text-4xl text-[#0088FF] font-semibold">
            {Data.Icon}
            <span>{Data.Titulo}</span>
        </div>
        <div>
            <p className="text-gray-800">{Data.Descripcion}</p>
        </div>
    </article>
  )
  })

  return(Cards)
}
