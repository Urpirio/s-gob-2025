import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex pt-5 pb-5 pr-5 pl-5 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center flex-grow flex-basis-0">
            <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm select-none">LOGO</h1>
        </div>
        <nav className="
            flex 
            items-center 
            justify-evenly
            gap-2 md:gap-5
            flex-grow 
            flex-basis-0
            [&>a]:font-semibold
            [&>a]:text-base md:[&>a]:text-lg
            [&>a]:flex-basis-0
            [&>a]:flex-grow
            [&>a]:justify-center
            [&>a]:px-2 md:[&>a]:px-4
            [&>a]:py-1
            [&>a]:rounded-lg
            [&>a]:transition-colors
            [&>a]:hover:text-blue-700
            [&>a]:hover:bg-blue-100
            [&>a]:hover:underline
            [&>a]:tracking-tight
            [&>a]:shadow-none
        ">
            <Link href="/">Inicio</Link>
            <Link href="/Servicios">Servicios</Link>
            <Link href="/SobreNosotros">Sobre Nosotros</Link>
            <Link href="/Ayuda">Ayuda</Link>
        </nav>
        <div className="
        flex 
        items-center 
        justify-end 
        flex-grow 
        flex-basis-0 
        gap-3 md:gap-5
        [&>button]:border
        [&>button]:border-blue-500
        [&>button]:text-blue-700
        [&>button]:bg-white
        [&>button]:hover:bg-blue-50
        [&>button]:transition
        [&>button]:duration-200
        [&>button]:p-2
        [&>button]:pl-5
        [&>button]:pr-5
        [&>button]:rounded-2xl
        [&>button]:font-semibold
        [&>button]:shadow-sm
        ">
            <button>Iniciar sesión</button> 
            <button className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700">Registrarse</button>
            <AiOutlineGlobal className="text-2xl text-blue-700 hover:text-blue-900 cursor-pointer transition"/>
        </div>
    </header>
  )
}
