import Link from 'next/link';
import CardRegistro1 from '../subcomponents/CardRegistro1';
import { FaArrowRight } from "react-icons/fa6";


export default function SectionRegistro1() {
  return (
    <section className='flex flex-col gap-5'>
      <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-6xl text-primary text-center'>Crea una cuenta</h1>
        <span className='text-3xl font-light text-center'>Elige como quieres registrarte</span>
      </div>
      <div className='flex flex-col items-center gap-3 px-5 lg:px-0'>
        <CardRegistro1/>
      </div>
      <div className='flex justify-center'>
        <Link className='
        flex 
        items-center 
        justify-between 
        border 
        pt-3 
        pb-3 
        pl-5 
        pr-5 
        gap-2 
        rounded-xl 
        bg-primary
        text-white
        ' href={'/Registro/R2'}>
            <span className='font-semibold'>Siguiente</span>
            <FaArrowRight className='text-2xl'/>
        </Link>
      </div>
    </section>
  )
}
