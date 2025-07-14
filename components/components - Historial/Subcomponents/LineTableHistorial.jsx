'use client'

import { useState } from "react"
import { DataHistorial } from "../data/DataHistorial"
import { getStatusColor } from "../func/GetStatusColor"
import TicketComponent from "../ticket/ticket"
import { MdDateRange } from "react-icons/md"
import { GoClock } from "react-icons/go"
import { LuTickets } from "react-icons/lu"

export default function LineTableHistorial() {
  const [openTicketId, setOpenTicketId] = useState(null)
  const [selectedIds, setSelectedIds] = useState([])

  const ticketSelected = DataHistorial.find((d) => d.id === openTicketId)

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(DataHistorial.map(item => item.id))
    } else {
      setSelectedIds([])
    }
  }

  const allSelected = selectedIds.length === DataHistorial.length

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 font-semibold text-sm border-b">
        <div className="flex items-center gap-2 w-2/5">
      
        </div>
      </div>

      {DataHistorial.map((data) => {
        const { color, icon } = getStatusColor(data.status)
        const isSelected = selectedIds.includes(data.id)

        return (
          <div
            key={data.id}
            className="w-full bg-white rounded-xl shadow-sm border border-gray-200 mb-3 transition hover:shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between px-4 py-4 sm:px-6">
              <div className="flex items-start gap-30 w-full sm:w-2/5">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds([...selectedIds, data.id])
                    } else {
                      setSelectedIds(selectedIds.filter(id => id !== data.id))
                    }
                  }}

                />



                <div>
                  <div className="font-semibold text-sm text-gray-900">{data.name}</div>
                  <div className="text-xs text-gray-500">Junta Central Electoral</div>
                </div>
              </div>

              <div className="flex pl-[30px]  flex-col sm:flex-col gap-5 sm:gap-4 w-full sm:w-1/5 mt-3 sm:mt-0">
                <div className="flex  items-center text-sm text-gray-700">
                  <MdDateRange className="text-blue-600 mr-1" />
                  {data.date}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <GoClock className="text-blue-600 mr-1" />
                  {data.time}
                </div>
              </div>

              {/* ESTADO */}
              <div className="w-full pl-[30px] sm:w-1/5 mt-3 sm:mt-0">
                <div
                  className={`w-fit text-xs px-3 py-[6px] rounded-full font-medium flex items-center gap-2 ${color}`}
                >
                  {icon}
                  {data.status.charAt(0).toUpperCase() + data.status.slice(1)}

                </div>
              </div>

              {/* boton TICKET sin esta condicion ternaria no se renderiza */}
              <div className="w-full sm:w-1/5 mt-3 sm:mt-0 text-right">
                <button
                  className="flex items-center gap-2 justify-center w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-sm font-semibold py-2 px-4 rounded-xl text-gray-900 transition"
                  onClick={() =>
                    setOpenTicketId(openTicketId === data.id ? null : data.id)
                  }
                >
                  <LuTickets className="text-blue-600" />
                  Ver ticket
                </button>
              </div>
            </div>
          </div>
        )
      })}

      {/*este es el componete principal del boton en si */}
      {openTicketId && (
        <TicketComponent
          ticketId={ticketSelected.id}
          onClose={() => setOpenTicketId(null)}
        />
      )}
    </>
  )
}
