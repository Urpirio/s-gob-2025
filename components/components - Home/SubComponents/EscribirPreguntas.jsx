import Image from "next/image";
import ImgPreguntas from '@/../public/img - Home/Questions-cuate (1).png'

export default function EscribirPreguntas() {
  return (
    <div>
        <div>
            <Image src={ImgPreguntas}/>
            <h1>¿Alguna pregunta?</h1>
            <span>Puedes preguntar lo que quieras, estamos para aclarar tus dudas. </span>
        </div>
        <div>
            <input type="text" />
            <button>Enviar</button>
        </div>
    </div>
  )
}
