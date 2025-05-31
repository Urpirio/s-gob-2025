import React from 'react'
import { FaStar } from "react-icons/fa";



function Comentarios() {
return (
    <section className='flex flex-col hover:scale-105  transition-transform duration-300 p-5 items-center'>
        <div className='flex hover:bg-gray-200 flex-col rounded shadow-lg gap-4 h-[300px] border w-[300px] max-w-md bg-white p-6'>
            <article className='flex items-center rounded-2xl bg-gray-100 p-4 gap-4'>
                <img className='rounded-full h-12 w-12 object-cover' src="/src/assets/premium_photo-1689551670902-19b441a6afde.jpg" alt="Juana Hernandez" />
                <div className='flex flex-col text-left'>
                    <h2 className='font-bold'>Juana Hernandez</h2>
                    <span className='text-gray-400 text-sm'>@juana.hernandez...</span>
                </div>
            </article>
            <p className='text-center text-gray-700'>Desde que empecé a gestionar mis citas con Gestión Sin Límites, todo es mucho más fácil.</p>
            <div className='flex justify-end pr-5 gap-1'>
             <FaStar className='text-blue-600 text-2xl'/>
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