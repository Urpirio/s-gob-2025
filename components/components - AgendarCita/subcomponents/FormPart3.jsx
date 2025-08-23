'use client';

export default function FormPart3({InputsForm,DropdownPGob,DropdownTramite,onConfirmarCita}) {


  return (
    <div className='hidden md:flex flex-col items-center justify-between border gap-1  border-gray-400 w-[30%] min-w-90 py-10 px-5 rounded-2xl'>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-4xl text-[#0088FF] font-semibold'>Datos de tu cita</h1>
      </div>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Servicio:</h1>
        <span className='text-md text-gray-500'>{DropdownTramite ? DropdownTramite :'No disponible' }</span>
      </div>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Punto GOB:</h1>
        <span className='text-md text-gray-500'>{DropdownPGob ? DropdownPGob : 'No disponible'}</span>
      </div>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Nombres:</h1>
        <span className='text-md text-gray-500'>{InputsForm?.Nombres}</span>
      </div>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Apellidos:</h1>
        <span className='text-md text-gray-500'>{InputsForm?.Apellidos}</span>
      </div>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Teléfono:</h1>
        <span className='text-md text-gray-500'>{InputsForm?.Telefono}</span>
      </div>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Correo electrónico:</h1>
        <span className='text-md text-gray-500'>{InputsForm?.Correo}</span>
      </div>
      <div className='flex flex-col  w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Cédula:</h1>
        <span className='text-md text-gray-500'>{InputsForm?.Cedula}</span>
      </div>
      <div className='flex  flex-col w-[100%]'>
        <h1 className='text-xl text-[#0088FF] font-semibold'>Dirección:</h1>
        <span className='text-md text-gray-500'>{InputsForm?.Direccion}</span>
      </div>
      <div>
        <button 
        onClick={onConfirmarCita}
        className='px-5 py-2 bg-[#0088FF] text-white rounded-md hover:bg-blue-600 transition-colors duration-200'>
          Confirmar cita
        </button>
      </div>
    </div>
  )
}
