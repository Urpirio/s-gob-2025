import ImGprueba from '@/../public/img - servicios/image 18 (1).png';
import Image from 'next/image';
import { CiBookmark } from "react-icons/ci";


export default function CardServicios() {
  return (
    <article className='border border-gray-300 bg-white w-90 flex flex-col p-5 rounded-xl gap-3'>
        <header className='flex justify-between'>
            <Image src={ImGprueba} alt="df" className='h-20 w-50 object-contain ' />
            <button>
                <CiBookmark className='text-3xl'/>
            </button>
        </header>
        <main className='flex flex-col'>
            <h1 className='text-xl font-semibold'>Legalizar documentos</h1>
            <p className='font-light'>
                Ciudadano, moderno, eficaz, eficiente, productivo,
                participativo y dinámico, incorporando el uso de
                los recursos de información para la prestación de
                los servicios
            </p>
        </main>
        <footer className=' flex justify-end'>
            <button className='text-white font-semibold p-2 rounded-xl bg-[#0088FF]'>Solicitar servicio</button>
        </footer>
    </article>
  )
}
