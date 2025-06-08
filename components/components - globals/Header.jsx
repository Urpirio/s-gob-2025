import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

// Javier por favor no toquees el header, -> nota: es responsive.
export default function Header() {
  return (
    <header className="flex justify-between items-center shadow-2xs px-5 py-4 sticky top-0 bg-white z-50">
      <div className="flex flex-grow justify-start  w-[30%]">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <div className="hidden w-[30%] justify-center lg:flex">
        <nav className="w-[100%]  flex justify-between">
          <Link href={''}>Inicio</Link>
          <Link href={''}>Servicios</Link>
          <Link href={''}>Sobre nosotros</Link>
          <Link href={''}>Ayuda</Link>
        </nav>
      </div>
      <div className="hidden flex-grow justify-end gap-3  w-[30%] lg:flex">
        <button className="bg-[#0088FF] py-2 px-5 rounded-2xl text-white">Iniciar sesion</button>
        <button className="bg-[#D9D9D9] py-2 px-5 rounded-2xl text-gray-700">Regitrarse</button>
        <button className="flex gap-1 items-center text-2xl">
          <TbWorld/>
          <IoIosArrowDown/>
        </button>
      </div>
    </header>
  );
}
