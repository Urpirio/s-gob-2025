import { FaUser } from "react-icons/fa";

export default function SectionTitle() {
  return (
    <section className="flex px-10 py-10">
        <div className="flex items-center gap-2 text-3xl">
          <FaUser className="text-primary"/>
          <h1 className="font-bold">Perfil</h1>
        </div>
    </section>
  )
}
