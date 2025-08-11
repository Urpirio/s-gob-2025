'use client';
import ImGprueba from '@/../public/img - servicios/image 18 (1).png';
import Image from 'next/image';
import { FaBookmark } from "react-icons/fa6";
import { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { DataCardServices } from '../data/DataCardServices';



export default function CardServicios({ChangeAboutS}) {



 const Card = DataCardServices.map(Data =>{
    const [ SaveService, setSaveService ] = useState(false);
    const CGA = () =>{
        ChangeAboutS(Data);
    };

    return (
    <article className='border border-gray-300 bg-white w-80 flex flex-col p-5 rounded-xl gap-3'>
        <header className='flex justify-between items-center'>
            <Image src={ImGprueba} alt="df" className='h-20 w-50 object-contain ' />
                {SaveService ? <FaBookmark className="w-[30px] h-[30px] text-primary text-4xl" onClick={()=>{setSaveService(!SaveService)}}/> 
                : <CiBookmark className="w-[30px] h-[30px] text-gray-500 " onClick={()=>{setSaveService(!SaveService)}}/>}
        </header>
        <main className='flex flex-col'>
            <h1 className='text-xl font-semibold'>{Data.Servicio}</h1>
            <p className='font-light'>
                {Data.Descripcion}
            </p>
        </main>
        <footer className=' flex justify-end'>
            <button  className='text-white font-semibold p-2 rounded-xl bg-[#0088FF] cursor-pointer hover:opacity-80 transition-all duration-300' 
                onClick={CGA}>
                Solicitar servicio
            </button>
        </footer>
    </article>
  )
  })

  return(Card)
}
