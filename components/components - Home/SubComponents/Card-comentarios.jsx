import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Img1 from '@/../public/img - Home/Punto-Gob-Sambil.jpg'



function Comentarios() {
return (
    <section className='flex flex-col hover:scale-105 gap-20  transition-transform duration-300 p-5 items-center'>
        <div className='flex hover:bg-gray-200 flex-col rounded shadow-sm shadow-blue-400 gap-4 h-[300px]  w-[300px] max-w-md bg-white p-6'>
            <article className='flex items-center rounded-2xl bg-gray-100 p-4 gap-4'>
              <Image className="rounded-full h-12 w-12 object-cover" src={Img1} alt="Juana Hernández" width={48} height={48} />
                <div className='flex flex-col text-left'>
                    
                    <h2 className='font-bold'>Juana Hernández</h2>

                    <span className='text-gray-400 text-sm'>@juana.hernandez...</span>
                </div>
            </article>

            <p className='text-start text-gray-700'>“Desde que empece a gestionar mis citas desde Gestion sin limites todo es mas facil.”</p>
            <div className='flex items-end mt-4 justify-end pr-5 gap-1'>
             <FaStar className='text-blue-600 text-2xl '/>
             <FaStar  className='text-blue-600 text-2xl'/>
             <FaStar  className='text-blue-600 text-2xl'/>
             <FaStar  className='text-blue-600 text-2xl' />
              <FaStar  className='text-blue-600 text-2xl' />
            </div>
        </div>
    </section>
)
}

export default Comentarios