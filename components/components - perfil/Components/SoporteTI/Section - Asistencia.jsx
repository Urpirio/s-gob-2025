'use client'
import Image from "next/image";
import AsistenciaImg from '@/../public/img - soporte/Group 101.svg';

export default function SectionAsistencia() {
  return (
    <section className="w-1/3 min-w-90">
        <Image className="h-full w-full" src={AsistenciaImg} alt="Image Soporte"/>
    </section>
  )
}
