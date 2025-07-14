'use client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputText } from 'primereact/inputtext';
import { DateTimePicker } from '@mui/x-date-pickers';
import { Dropdown } from 'primereact/dropdown';
import { DataDropDownPuntoGob } from '../Data/DataDropDown - PGob';
import { useState } from 'react';
        


export default function FormPart1({
  InputValues,
  setInputValues,
}) {

  const [HoraCita,setHoraCita] = useState();
  
  const [DropdownPGob,setDropdownPGob] = useState(null);
  const [DropdownTramite,setDropdownTramite] = useState(null);

  return (
    <div className="flex flex-col gap-5 w-[25%] justify-end  min-w-80">
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Institucion</label>
            <Dropdown 
            placeholder='Selecciona una institucion'
            value={DropdownPGob}
            onChange={(e)=>setDropdownPGob(e.value)}
            options={DataDropDownPuntoGob} 
            optionLabel='PuntoGob'
            panelClassName="[&_li]:hover:border p-1 [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div >
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Tramite</label>
            <Dropdown 
            placeholder='Selecciona el Tramite'
            value={DropdownTramite}
            onChange={(e)=>setDropdownTramite(e.value)}
            options={DataDropDownPuntoGob} 
            optionLabel='PuntoGob'
            panelClassName="[&_li]:hover:border p-1 [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Apellidos</label>
            <InputText 
            value={InputValues?.Apellidos}
            onChange={(e)=>setInputValues({...InputValues,Apellidos:e.target.value})} 
            type="text" 
            placeholder="Apellidos"  
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Telefono</label>
            <InputText 
            value={InputValues?.Telefono}  
            onChange={(e)=>setInputValues({...InputValues,Telefono:e.target.value})}
            type="text" 
            placeholder="000-000-0000" 
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
          <label className="text-xl font-semibold">Hora de la cita</label>
          <DateTimePicker  
          value={HoraCita} 
          onChange={(e)=>{setHoraCita(e.toString())}} 
          className='bg-gray-50 rounded-lg text-primary'/>
        </LocalizationProvider>
    </div>
  )
};
