'use client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputText } from 'primereact/inputtext';
import { DateTimePicker } from '@mui/x-date-pickers';
import { Dropdown } from 'primereact/dropdown';
import { useState, useEffect } from 'react';
import { useInstituciones, useServicios, usePuntosGob } from '../../../hooks/useApi';
        
export default function FormPart1({
  InputValues,
  setInputValues,
  selectedInstitucion,
  setSelectedInstitucion,
  selectedServicio,
  setSelectedServicio,
  selectedPuntoGob,
  setSelectedPuntoGob,
  selectedFecha,
  setSelectedFecha,
  selectedHora,
  setSelectedHora
}) {

  const { instituciones, loading: loadingInstituciones } = useInstituciones();
  const { servicios, loading: loadingServicios } = useServicios(selectedInstitucion?.id);
  const { puntosGob, loading: loadingPuntosGob } = usePuntosGob();

  // Filtrar puntos GOB que tienen la institución seleccionada
  const puntosGobDisponibles = selectedInstitucion 
    ? puntosGob.filter(punto => 
        punto.instituciones.some(inst => inst.id === selectedInstitucion.id)
      )
    : [];

  const handleInstitucionChange = (e) => {
    setSelectedInstitucion(e.value);
    setSelectedServicio(null); // Reset servicio cuando cambia institución
    setSelectedPuntoGob(null); // Reset punto GOB cuando cambia institución
  };

  const handleServicioChange = (e) => {
    setSelectedServicio(e.value);
  };

  const handlePuntoGobChange = (e) => {
    setSelectedPuntoGob(e.value);
  };

  const handleDateTimeChange = (newValue) => {
    if (newValue) {
      const fecha = newValue.format('YYYY-MM-DD');
      const hora = newValue.format('HH:mm');
      setSelectedFecha(fecha);
      setSelectedHora(hora);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-[25%] justify-end  min-w-80">
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Institución</label>
            <Dropdown 
            placeholder='Selecciona una institución'
            value={selectedInstitucion}
            onChange={handleInstitucionChange}
            options={instituciones} 
            optionLabel='nombre'
            loading={loadingInstituciones}
            panelClassName="[&_li]:hover:border p-1 [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Servicio</label>
            <Dropdown 
            placeholder='Selecciona el servicio'
            value={selectedServicio}
            onChange={handleServicioChange}
            options={servicios} 
            optionLabel='nombre'
            loading={loadingServicios}
            disabled={!selectedInstitucion}
            panelClassName="[&_li]:hover:border p-1 [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Punto GOB</label>
            <Dropdown 
            placeholder='Selecciona el Punto GOB'
            value={selectedPuntoGob}
            onChange={handlePuntoGobChange}
            options={puntosGobDisponibles} 
            optionLabel='nombre'
            loading={loadingPuntosGob}
            disabled={!selectedInstitucion}
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
            <label className="text-xl font-semibold">Teléfono</label>
            <InputText 
            value={InputValues?.Telefono}  
            onChange={(e)=>setInputValues({...InputValues,Telefono:e.target.value})}
            type="text" 
            placeholder="000-000-0000" 
            className="border border-gray-300 py-3.5 px-3 rounded-md bg-gray-50"/>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label className="text-xl font-semibold">Fecha y hora de la cita</label>
          <DateTimePicker  
          onChange={handleDateTimeChange}
          disablePast
          format="DD/MM/YYYY HH:mm"
          className='bg-gray-50 rounded-lg text-primary'/>
        </LocalizationProvider>
    </div>
  )
};
