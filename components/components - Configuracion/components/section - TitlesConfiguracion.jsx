import { IoMdSettings } from "react-icons/io";

export default function SectionTitlesConfiguracion() {
  return (
    <section>
        <div className="flex w-[100%] pl-5-">
            <h1 className="flex items-center text-4xl font-bold">
              <IoMdSettings className="text-[#007AFF]"/> 
              <span>Configuracion</span>
            </h1>
        </div>
    </section>
  )
}
