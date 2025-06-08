import ImgPrueba from '@/../public/img - servicios/image 18 (1).png';
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa6";
import Link from 'next/link';

export default function AboutServices() {
  return (
    <article className='flex flex-col justify-between h-[100%] py-5'>
        <header className='flex flex-col gap-5'>
            <div className='flex justify-center'>
                <Image src={ImgPrueba} className='object-contain h-[70%] w-[70%]'/>
            </div>
            <div className='flex flex-col px-5 py-2 gap-2'>
                <div className='flex justify-between'>
                    <span className='flex items-center w-[45%] gap-3'>
                        <FaLocationDot className='text-[#007AFF]'/>
                        <span>Punto GOB Sambil - SD</span>
                    </span>
                    <span className='flex items-center w-[45%] gap-3'>
                        <FaRegClock className='text-[#007AFF]'/>
                        <span>Lunes a Viernes - 8am - 7pm </span>
                    </span>
                </div>
                <div className='flex justify-between'>
                    <span className='flex items-center w-[45%] gap-3'>
                        <TbWorldWww  className='text-[#007AFF]'/>
                        <Link href={''} className='text-[#007AFF]'>Puntos.gob.do</Link>
                    </span>
                    <span className='flex items-center w-[45%] gap-3'>
                        <FaArrowDown className='text-[#007AFF]'/>
                        <span>Normalmente bajo</span>
                    </span>
                </div>
            </div>
        </header>
        <main className='px-5 flex flex-col gap-10'>
            <div>
                <p className='text-[18px]'>
                    Tenemos como objetivo vigilar el cumplimiento de la Constitución,
                    las leyes, las decisiones judiciales y los actos administrativos.
                    Proteger los derechos humanos y asegurar su efectividad, con el
                    auxilio del Defensor del Pueblo. Defender los intereses de la
                    sociedad. Defender los intereses colectivos, en especial el ambiente.
                </p>
            </div>
            <div>
                <div>
                    <h1 className='text-xl font-semibold'>Servicios mas utilizados:</h1>
                </div>
                <ul className='px-8'>
                    <li className=' list-disc'>Atencion de audiencia </li>
                    <li className=' list-disc'>Atencion de audiencia </li>
                    <li className=' list-disc'>Atencion de audiencia </li>
                    <li className=' list-disc'>Atencion de audiencia </li>
                    <li className=' list-disc'>Atencion de audiencia </li>
                    <li className=' list-disc'>Atencion de audiencia </li>
                </ul>
            </div>
        </main>
        <footer className='flex justify-center py-2'>
            <button className='w-50 py-2 rounded-xl border text-white bg-[#0088FF]'>Agendar cita</button>
        </footer>
    </article>
  )
}
