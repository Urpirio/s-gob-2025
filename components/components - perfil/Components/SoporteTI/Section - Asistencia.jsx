'use client'
import Image from "next/image";
import AsistenciaImg from '@/../public/img - soporte/Group 101.svg';

export default function SectionAsistencia() {
  return (
    <section className="w-1/3 flex justify-center min-w-90">
        <Image className="w-[80%] md:h-full  md:w-full " src={AsistenciaImg} alt="Image Soporte"/>
    </section>
  )
}
