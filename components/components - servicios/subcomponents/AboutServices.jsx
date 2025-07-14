'use client';
import ImgPrueba from '@/../public/img - servicios/image 18 (1).png';
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
import { SetStateAbout } from '../components/section - servicios';


export default function AboutServices({Data}) {

  return (
    <article className='flex flex-col justify-between h-full py-5 w-full '>
        <header className='flex flex-col gap-5 lg:gap-5'>
            <div className='px-4 lg:px-0'>
                <button className='flex items-center text-primary text-xl font-semibold gap-2' onClick={()=>{SetStateAbout(false)}}>
                    <IoIosArrowBack/>
                    <span>Volver</span>
                </button>
            </div>
            <div>
                <Image src={ImgPrueba} alt='Prueba' className='object-contain h-[80%] w-[50%] lg:w-[70%] lg:h-[70%]'/>
            </div>
            <div className='flex flex-col  py-2 gap-5 lg:gap-2'>
                <div className='flex justify-center lg:justify-between'>
                    <span className='flex items-center w-[45%] gap-3'>
                        <FaLocationDot className='text-[#007AFF]'/>
                        <span>Punto GOB Sambil - SD</span>
                    </span>
                    <span className='flex items-center w-[45%] gap-3'>
                        <FaRegClock className='text-[#007AFF]'/>
                        <span>Lunes a Viernes - 8am - 7pm </span>
                    </span>
                </div>
                <div className='flex justify-center lg:justify-between'>
                    <span className='flex items-center w-[45%] gap-3'>
                        <TbWorldWww  className='text-[#007AFF]'/>
                        <Link href={''} className='text-[#007AFF]'>{Data.Data.Link}</Link>
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
                <p className='text-[18px]'>{Data.Descripcion}</p>
            </div>
            <div>
                <div>
                    <h1 className='text-xl font-semibold'>Servicios mas utilizados:</h1>
                </div>
                <ul className=' text-gray-700'>
                    {Data.Data.ListaServicios.map( L => {
                        return(
                            <li key={L.Servicio}>{L.Servicio}</li>
                        )
                    })}
                </ul>
            </div>
        </main>
        <footer className='flex justify-center px-5 lg:px-0 py-2'>
            <Link  href={{pathname:`/${Data.id}`}} 
                className='w-full lg:w-50 py-2 flex justify-center items-center rounded-xl border text-white bg-[#0088FF]'>
                <span>Agendar cita</span>
            </Link>
        </footer>
    </article>
  )
}
