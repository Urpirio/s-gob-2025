import Image from "next/image";
import LogoGOB from '@/../public/img - Home/image 4 (1).png';
import { CiBookmark } from "react-icons/ci";

export default function CardServicios() {
  return (
    <article className="bg-white p-[20px]  w-[418px] items-center h-[194px] rounded-2xl shadow-2xl">
      <header className="flex gap-5 items-center justify-between">
        <Image className="w-[143px]" src={LogoGOB} alt="Logo"></Image>
         <CiBookmark className="w-[24px] h-[24px]" />
      </header>
      <main> 
        <h1 className="font-semibold">punto Gob-Sambil</h1>
        <p className="w-[334px] text-[13px] text-neutral-700">Ciudadano, moderno, eficaz, eficiente, productivo, participativo y dinámico, incorporando el uso de los recursos de información para la prestación de los servicios</p>

      </main>
      <footer className="flex items-center justify-end pl-1.5">
        <button className= " mt-4 bg-blue-500 bg-gradient-to-tl to-blue-400 from-blue-700 rounded-[4px] w-[113px] text-white ">solicitar</button>
      </footer>
    </article>
  )
}
