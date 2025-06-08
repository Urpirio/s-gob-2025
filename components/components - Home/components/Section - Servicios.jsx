import React from 'react'
import CardServicios from '../SubComponents/CardServicios';
import { Albert_Sans } from 'next/font/google'

const albertsans = Albert_Sans({
  subsets: ['latin-ext']
});

//Esto hay que relacionarlo con un array de datos para cuando lo conectemos a la api funciones perfectamente.

export default function SectionServicios() {
  return (
    <section className='flex flex-col gap-20 pt-10 pb-10 bg-[#EFEFEF]'>
        <div className='text-center'>
            <h1  className={`text-6xl font-semibold ${albertsans.className}`} >Servicios más utilizados</h1>
        </div>
        <div className='flex gap-5 p-5 overflow-x-scroll ' style={{scrollbarWidth:'none',scrollbarColor:'blue'}} >
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
        </div>
    </section>
  )
}
