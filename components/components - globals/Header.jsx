import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image";


export default function Header() {
  return (
          <section className="flex pt-5 pb-5 pr-5 pl-5 bg-white shadow-md sticky top-0 z-50 items-center">
      <div className="flex items-center flex-grow flex-basis-0">
        <Image src="/img - Home/Cupula.92806960.svg" alt="Logo institucional" width={100} height={40} className="w-[40px] h-[40px] object-contain" />
      </div>
      {/* Menú hamburguesa sin JS, solo CSS */}
      <input id="menu-toggle" type="checkbox" className="peer hidden" />
      <label htmlFor="menu-toggle" aria-label="Abrir menú de navegación" className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 mr-2 cursor-pointer z-50">
        <span className="sr-only">Abrir menú</span>
        <span className="block w-8 h-1 bg-blue-700 mb-1 rounded transition-all"></span>
        <span className="block w-8 h-1 bg-blue-700 mb-1 rounded transition-all"></span>
        <span className="block w-8 h-1 bg-blue-700 rounded transition-all"></span>
      </label>
      <nav
        id="nav-menu"
        className="hidden md:flex text-center flex-col md:flex-row items-center justify-evenly gap-2 md:gap-5 flex-grow flex-basis-0 [&>a]:font-semibold [&>a]:text-base md:[&>a]:text-lg [&>a]:flex-basis-0 [&>a]:flex-grow [&>a]:justify-center [&>a]:px-2 md:[&>a]:px-4 [&>a]:py-1 [&>a]:rounded-lg [&>a]:transition-colors [&>a]:hover:text-blue-700 [&>a]:hover:bg-blue-100 [&>a]:hover:underline [&>a]:tracking-tight [&>a]:shadow-none absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent z-40 peer-checked:flex peer-checked:!flex"
      >
        <Link href="/">Inicio</Link>
        <Link href="/Servicios">Servicios</Link>
        <Link href="/SobreNosotros">Sobre Nosotros</Link>
        <Link href="/Ayuda">Ayuda</Link>
      </nav>

      <div className="flex items-center justify-end flex-grow flex-basis-0 gap-3 md:gap-5 [&>button]:border [&>button]:border-blue-500 [&>button]:text-blue-700 [&>button]:bg-white [&>button]:hover:bg-blue-50 [&>button]:transition [&>button]:duration-200 [&>button]:p-2 [&>button]:pl-5 [&>button]:pr-5 [&>button]:rounded-2xl [&>button]:font-semibold [&>button]:shadow-sm">

        <Link href="/Registro">
          <button className="border border-blue-600 text-blue-700 p-2 bg-white hover:bg-blue-50 transition duration-200 rounded-2xl pl-5 pr-5 shadow-sm font-semibold  ">Iniciar sesión</button>
        </Link>

         <Link href="/Registro">
          <button className="border border-blue-600 text-blue-700 p-2 bg-white hover:bg-blue-50 transition duration-200 rounded-2xl pl-5 pr-5 shadow-sm font-semibold  ">Registrarse</button>
        </Link>

        
        <Link href="/Historial">
        <AiOutlineGlobal className="text-2xl text-blue-700 hover:text-blue-900 cursor-pointer transition" />
        </Link>

      </div>
    </section>
  );
}
