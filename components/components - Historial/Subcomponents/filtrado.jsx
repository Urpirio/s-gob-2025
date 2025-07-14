import React from 'react'
import { IoSyncSharp } from 'react-icons/io5'
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

const TableHeader = ({ filtro, setFiltro }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full w-full text-sm text-left">
        <thead className=" text-gray-700 uppercase tracking-wider">
          <tr className="flex items-center px-4 py-3 border-b border-gray-300">

            {/* Selección + Filtro XD */}
            <th className="flex items-center gap-3 w-[200px]">
              <MdOutlineCheckBoxOutlineBlank className="text-blue-600 text-xl" />

              <select
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="text-sm text-blue-700 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none"
              >
                <option value="">Todas</option>
                <option value="activo">Activos</option>
                <option value="fallido">Fallidos</option>
                <option value="procesado">Procesados</option>
              </select>
            </th>

            {/* Servicios mi pana */}
            <th className="flex items-center gap-2 w-2/5 min-w-[180px] font-medium">
              <IoSyncSharp className="text-blue-700 text-xl" />
              Servicios
            </th>

            <th className="w-1/5 min-w-[120px] font-medium px-4">Fecha</th>

            <th className="w-1/5 min-w-[120px] font-medium px-4">Estado</th>

            <th className="w-1/5 min-w-[120px] font-medium px-4">Tickets</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default TableHeader
