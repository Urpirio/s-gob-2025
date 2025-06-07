'use client';
import { DataHistorial } from "../data/DataHistorial";
import { getStatusColor } from "../func/GetStatusColor";

export default function LineTableHistorial() {

    const Rowtable = DataHistorial.map((Data) =>{
        return(
            <tr key={Data.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{Data.name}</span>
                  </div>
                  <div className="text-xs text-gray-500">Junta Central Electoral</div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex flex-col">
                    <span className="font-medium">{Data.date}</span>
                    <span className="text-xs text-gray-500">{Data.time}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(Data.status)}`}>
                    {Data.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">
                  <button className="text-indigo-600 hover:text-indigo-900">{Data.ticket}</button>
                </td>
              </tr>
        )
    })

  return (Rowtable)
}
