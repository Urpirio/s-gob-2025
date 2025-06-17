import Image from "next/image";
import LogoGOB from '@/../public/img - Home/image 4 (1).png';
import { CiBookmark } from "react-icons/ci";


//Porfavor no modificar esta completamente responsive. att: urpirio 
export default function CardServicios() {
  return (
    <article className=" flex flex-col w-90  min-w-80 items-center  rounded-2xl border border-gray-300 bg-white p-5">
      <header className="flex justify-between gap-5  w-[100%]">
        <Image className="w-[143px]" src={LogoGOB} alt="Logo"></Image>
         <CiBookmark className="w-[24px] h-[24px]" />
      </header>
      <main> 
        <h1 className="font-semibold">Punto Gob-Sambil</h1>
        <p className=" text-[13px] text-neutral-700">
          Ciudadano, moderno, eficaz, eficiente, productivo,
           participativo y dinámico, incorporando el uso de
            los recursos de información para la prestación de los servicios
          </p>

      </main>
      <footer className="flex mt-5 items-center justify-end w-[100%]">
        <button className= " bg-blue-500  rounded-[4px] w-30 py-0.5 text-white ">Solicitar</button>
      </footer>
    </article>
  )
}
