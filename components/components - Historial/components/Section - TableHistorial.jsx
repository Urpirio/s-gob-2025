import { useState } from "react"
import LineTableHistorial from "../Subcomponents/LineTableHistorial"
import TableHeader from "../Subcomponents/filtrado"

export default function SectionTableHistorial() {
  const [filtro, setFiltro] = useState("")

  return (
    <section className="bg-white w-full max-w-6xl mx-auto rounded-lg  my-6">

      <TableHeader filtro={filtro} setFiltro={setFiltro} />

      <table className="w-full table-auto">
        <tbody className="text-gray-700 text-sm font-light">
          <LineTableHistorial filtro={filtro} />
        </tbody>
      </table>
    </section>
  )
}
