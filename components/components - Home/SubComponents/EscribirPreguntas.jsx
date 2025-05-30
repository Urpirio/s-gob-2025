import Image from "next/image";
import ImgPreguntas from '@/../public/img - Home/Questions-cuate (1).png'

export default function EscribirPreguntas() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center gap-2 pb-2">
            <Image src={ImgPreguntas}/>
            <h1 className="text-3xl">¿Alguna pregunta?</h1>
            <span className="font-extralight text-xl">Puedes preguntar lo que quieras, estamos para aclarar tus dudas. </span>
        </div>
        <div className="
        flex 
        flex-col 
        items-center
        gap-5
        [&div>input]:w-[80%]
        [&div>input]:border
        [&div>input]:border-gray-400
        [&div>input]:p-2
        [&div>input]:rounded-md
      [&div>input]:bg-[#F3F3F3]
        [&div>input]:outline-none
        [&div>button]:border
        [&div>button]:pl-15
        [&div>button]:pr-15
        [&div>button]:pt-2
        [&div>button]:pb-2
        [&div>button]:rounded-3xl

        ">
            <input type="text" placeholder="Escribe tu pregunta y presiona enter" />
            <button className="bg-[#0088FF] text-white font-semibold">Enviar</button>
        </div>
    </div>
  )
}
