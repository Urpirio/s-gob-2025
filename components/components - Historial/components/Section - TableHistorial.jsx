import LineTableHistorial from "../Subcomponents/LineTableHistorial";

export default function SectionTableHistorial() {
  return (
    <section className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Servicios</th>
              <th className="py-3 px-6 text-left">Fecha</th>
              <th className="py-3 px-6 text-left">Estado</th>
              <th className="py-3 px-6 text-left">Tickets</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <LineTableHistorial/>
          </tbody>
        </table>
      </section>
  )
}
