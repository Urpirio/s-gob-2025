'use client';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { DataHistorial } from '../../Data/Historial/DataHistorial';
import { useState } from 'react';
import { useComponentsTable } from '../../SubComponents/useComponentTable';
import Pop_Up_Ticket from '../../SubComponents/Pop-Up-Ticket';

export default function SectionTableHistorial() {

  const [TicketSeleccionado,setTicketSeleccionado] = useState();
  const {ServiciosC,EstadoC,FechaC,Tickets} = useComponentsTable();


  return (
    <section className='pb-5 '>
        <DataTable
        value={DataHistorial}
        selectionMode={TicketSeleccionado ? null : 'single'}
        selection={TicketSeleccionado}
        checkIcon={true}
        onSelectionChange={(e)=>setTicketSeleccionado(e.value)}
        className={"border border-gray-300 overflow-hidden rounded-xl"}
        tableClassName={" [&_thead>tr>th]:text-gray-600 [&_thead>tr>th]:p-4  [&_thead]:bg-gray-50" }
        rowClassName={' p-5 [&_td]:p-4 '}
        >
          <Column selectionMode='multiple'/>

          <Column 
          field='Servicios' 
          header={'Servicios'} 
          body={(D)=><ServiciosC D={D}/>}/>

          <Column 
          field='Fecha' 
          header={'Fecha'} 
          body={(D)=><FechaC D={D}/>}/>

          <Column 
          field='Estado' 
          header={'Estado'} 
          body={(D)=><EstadoC Estado={D?.Estado}/>}/>

          <Column 
          field='Tickets' 
          header={'Tickets'} 
          body={(D)=><Tickets Data={D}/>}/>

        </DataTable>
    </section>
  )
}
