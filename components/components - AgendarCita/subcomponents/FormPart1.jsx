import { DateCalendar, DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function FormPart1() {
  return (
    <div className="flex flex-col gap-5 w-[25%]">
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Institucion</label>
            <input type="text" placeholder="Por defecto"  className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]"/>
        </div >
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Apellidos</label>
            <input type="text" placeholder="Genez Suarez"  className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]"/>
        </div>
        <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">Telefono</label>
            <input type="text" placeholder="000-000-0000"  className="border border-gray-300 p-2 rounded-md bg-[#F3F3F3]"/>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar className='border border-gray-300 bg-[#F3F3F3] rounded-xl'/>
        </LocalizationProvider>
    </div>
  )
}
