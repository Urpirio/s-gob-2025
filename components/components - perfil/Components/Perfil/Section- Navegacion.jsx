'use client';
import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";


export default function SectionNavegacion() {

  const Pathname = usePathname();


  return (
    <section className="flex justify-center py-2 w-full">
        <nav className="flex items-center gap-2 w-[60%] justify-between p-1 rounded-md border border-gray-100 bg-[#f8f9fa]">
          <Link href={'/Perfil'}
          className={`flex items-center justify-center gap-2  w-1/3 p-2 rounded-md ${Pathname === '/Perfil' ? 'bg-primary text-white border' : ''}`}>
          <FiUsers/>
          <span>Perfil</span>
          </Link>

          <Link href={'/Perfil/Historial'}
          className={`flex items-center justify-center gap-2  w-1/3 p-2 rounded-md ${Pathname === '/Perfil/Historial' ? 'bg-primary text-white border' : ''}`}
          >
          <GoFileDirectory/>
          <span>Historial</span>
          </Link>

          <Link href={'/Perfil/SoporteTecnico'}
          className={`flex items-center justify-center gap-2  w-1/3 p-2 rounded-md ${Pathname === '/Perfil/SoporteTecnico' ? 'bg-primary text-white border' : ''}`}>
          <FaRegQuestionCircle/>
          <span>Soporte Tecnico</span>
          </Link>

        </nav>
    </section>
  )
}
