'use client';
import { DataHistorial } from "../data/DataHistorial";
import { getStatusColor } from "../func/GetStatusColor";
import { useState } from "react";
import TicketComponent from "../ticket/ticket";


export default function LineTableHistorial() {
    const [openTicketId, setOpenTicketId] = useState(null);

    const Rowtable = DataHistorial.map((Data) => {
        const { color, icon } = getStatusColor(Data.status);
        return (
            <>
            <tr key={Data.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap w-2/5 min-w-[180px]">
                  <div className="flex items-center">
                    <span className="font-medium flex items-baseline-last">{Data.name}</span>
                  </div>
                  <div className="text-xs text-gray-500">Junta Central Electoral</div>
                </td>

                <td className="py-3 px-6 text-left w-1/5 min-w-[120px]">
                  <div className="flex flex-col">
                    <span className="font-medium items-center flex gap-2">{Data.date}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-2">{Data.time}</span>
                  </div>
                </td>

                <td className="py-3 px-8 text-left w-1/5 min-w-[120px]">
                  <span className={`py-1 px-3 justify-center rounded-full text-xs flex items-center gap-2 ${color}`}>
                    {Data.status}
                    {icon}
                  </span>
                </td>

                <td className="py-3 px-6 text-left w-1/5 min-w-[120px]">
                  <button
                    type="button"
                    onClick={() => setOpenTicketId(openTicketId === Data.id ? null : Data.id)}
                    className="w-full bg-gray-100 rounded-[10px] p-[6px] flex gap-2 items-center font-semibold text-black justify-center"
                  >
                    {Data.ticket}
                  </button>
                </td>
            </tr>
            {openTicketId === Data.id && (
              <tr>
                <td colSpan={4} className="py-4 px-6 bg-white border-b border-gray-200">
                  <TicketComponent ticketId={Data.id} />
                </td>
              </tr>
            )}
            </>
        )
    })

    return (Rowtable)
}
