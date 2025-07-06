import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function SectionBuscador() {
  return (
    <section className="flex justify-center items-center py-5">
        <div className="flex items-center justify-between rounded-4xl w-[60%] min-w-90 h-15 px-2 py-1 bg-[#F3F3F3]">
            <button className="h-12 flex-shrink-0 w-12 flex justify-center items-center rounded-[100%] bg-[#0088FF]">
                <CiSearch className="text-3xl text-white"/>
            </button>
            <input type="text" placeholder="Buscador"  className="w-[75%] h-[100%] text-xl text-gray-700 px-1 outline-0"/>
            <button className=" flex  flex-shrink-0 items-center gap-2  p-2 rounded-3xl bg-white ">
                <i className="text-gray-500">¿Donde estas?</i>
                <FaLocationDot className="text-[#007AFF]"/>
            </button>
        </div>
    </section>
  )
}
