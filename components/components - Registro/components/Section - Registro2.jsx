'use client';
import Btn_SignUp_With from "../subcomponents/Btn-SignUp-With";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function SectionRegistro2() {
  return (
    <section className='flex flex-col gap-10'>
      <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-6xl text-primary text-center'>Crea una cuenta</h1>
        <span className='text-3xl font-light text-center'>Completa con los datos requeridos</span>
      </div>
      <div className="flex items-center justify-center gap-1 px-5 lg:px-0">
        <Btn_SignUp_With/>
      </div>
      <form className="
      px-5 
      lg:px-0
      flex
      flex-col
      gap-5
      [&form>div>input]:w-[100%]
      [&form>div>input]:text-[18px]
      [&form>div>input]:h-15
      [&form>div>input]:rounded-xl
      [&form>div>input]:p-2
      [&form>div>input]:pl-5
      [&form>div>input]:pr-5
      [&form>div>input]:outline-0
      [&form>div>input]:placeholder:font-semibold
      [&form>div>input]:bg-[#F3F3F3]
      "
       action="" onSubmit={(e)=>{e.preventDefault()}}>
        <div>
            <input type="text" placeholder="Nombre completo"/>
        </div>
        <div>
            <input type="email" placeholder="Correo electronico" />
        </div>
        <div>
            <input type="password" placeholder="Confirmar correo electronico" />
        </div>
      </form>
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
        ' href={'/Registro'}>
            <span className='font-semibold'>Siguiente</span>
            <FaArrowRight className='text-2xl'/>
        </Link>
      </div>
    </section>
  )
}
