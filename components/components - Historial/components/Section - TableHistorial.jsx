import LineTableHistorial from "../Subcomponents/LineTableHistorial";
import TableHeader from "../Subcomponents/filtrado";


export default function SectionTableHistorial() {
  return (
    <section className="bg-white  flex flex-col items-center justify-center rounded my-6 w-[90%]">
      <TableHeader/>
      <table className="min-w-max w-[90%] table-auto mx-auto">
        <tbody className="text-gray-600  text-sm font-light">
          <LineTableHistorial/>
        </tbody>
      </table>
    </section>
  )
}
