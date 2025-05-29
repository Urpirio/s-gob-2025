import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex pt-5 pb-5 pr-5 pl-5">
        <div className="flex items-center flex-grow flex-basis-0">
            <h1 className="text-3xl">LOGO</h1>
        </div>
            <nav className="
            flex 
            items-center 
            justify-evenly
            gap-5
            flex-grow 
            flex-basis-0
            [&nav>a]:font-semibold
            [&nav>a]:text-[16px]
            [&nav>a]:flex-basis-0
            [&nav>a]:flex-grow
            [&nav>a]:justify-center
            ">
                <Link href={''}>Inicio</Link>
                <Link href={''}>Servicios</Link>
                <Link href={''}>Sobre nosotros</Link>
                <Link href={''}>Ayuda</Link>
            </nav>
        <div className="
        flex 
        items-center 
        justify-end 
        flex-grow 
        flex-basis-0 
        gap-5
        [&div>button]:border-1
        [&div>button]:p-2
        [&div>button]:pl-5
        [&div>button]:pr-5
        [&div>button]:rounded-2xl
        ">
            <button >Iniciar sesion</button> 
            <button >Registrarse</button>
            <AiOutlineGlobal/>
        </div>
    </header>
  )
}
