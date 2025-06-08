import React from 'react'

export default function FormPart3() {
  return (
    <div className=' flex flex-col items-center justify-between border  border-gray-400 w-[30%] py-10 px-5 rounded-2xl'>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-4xl text-[#0088FF] font-semibold'>Datos de tu cita</h1>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Tramite:</h1>
        <span className='text-xl text-gray-500'>Por defecto</span>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Institucion:</h1>
        <span className='text-xl text-gray-500'>Por defecto</span>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Nombres:</h1>
        <span className='text-xl text-gray-500'>John Doe</span>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Apellidos:</h1>
        <span className='text-xl text-gray-500'>Genez Suarez</span>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Telefono:</h1>
        <span className='text-xl text-gray-500'>000-000-0000</span>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Correo electronico:</h1>
        <span className='text-xl text-gray-500'>johndoe@gmail.com</span>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Cedula:</h1>
        <span className='text-xl text-gray-500'>000-0000000-0</span>
      </div>
      <div className='flex gap-3  items-center w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Direccion:</h1>
        <span className='text-xl text-gray-500'>Calle ej. #1, Provincia, Pais. </span>
      </div>
      <div>
        <button className=' px-5 py-2 bg-[#0088FF] text-white rounded-md'>Confirmar cita</button>
      </div>
    </div>
  )
}
