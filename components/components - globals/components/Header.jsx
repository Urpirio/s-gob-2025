'use client';
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { DeployMenuMovil } from "../func/DeployMenuMovil";
import { useEffect } from "react";
import { BsChatDots } from "react-icons/bs";
import { DeployChatBotContainer } from "./ChatBotContainer";


export let SetMenu;
export default function Header() {

  const router = useRouter();
  const pathname = usePathname();
  const {DeployMenu, Menu, setMenu} = DeployMenuMovil();

  useEffect(()=>{
    SetMenu = DeployMenu;
  }, [Menu]);

  return (
    <header className="flex justify-between items-center shadow-2xs px-5 py-4 sticky top-0 bg-white z-50">
      <div className="flex flex-grow justify-start  w-[30%]">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <div className="hidden w-[30%] justify-center lg:flex">   
        <nav className="w-[100%]  flex justify-between">
          <Link className={`${pathname === '/' ? 'text-primary' : 'text-gray-700'}`} href={'/'}>Inicio</Link>
          <Link className={`${pathname === '/Servicios' ? 'text-primary' : 'text-gray-700'}`} href={'/Servicios'}>Servicios</Link>
          <Link className={`${pathname === '/SobreNosotros' ? 'text-primary' : 'text-gray-700'}`} href={'/SobreNosotros'}>Sobre nosotros</Link>
          <Link className={`${pathname === '/Ayuda' ? 'text-primary' : 'text-gray-700'}`} href={'/Ayuda'}>Ayuda</Link>
        </nav>
      </div>
      <div className="hidden flex-grow justify-end gap-3  w-[30%] lg:flex">
        <Link href={'/Login'} className="bg-primary py-2 px-5 rounded-2xl text-white">Iniciar sesion</Link>
        <Link href={'/Registro'} className="bg-gray-100 py-2 px-5 rounded-2xl text-gray-700">Registrarse</Link>
        <button 
        onClick={()=>DeployChatBotContainer(true)}
        className="flex gap-1 text-2xl border rounded-full h-10 w-10 justify-center items-center bg-primary text-white shadow-2xl cursor-pointer hover:opacity-75 transition-all duration-200 hover:scale-110">
         <BsChatDots/>
        </button>
      </div>
      <div className="flex justify-end items-center w-[30%] lg:hidden">
        <button className="text-4xl text-primary" onClick={()=>{setMenu(!Menu)}}>
          {Menu ? <IoMdClose/> : <GiHamburgerMenu/>}
        </button>   
      </div>
      <menu id="Header-Menu-Movil" className={`border-x border-b border-gray-300 absolute top-17 shadow-2xs rounded-b-2xl right-0 w-full py-5 px-10 bg-white z-50 ${Menu ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-5 mb-5">
          <Link className={`${pathname === '/' ? 'text-primary' : 'text-gray-700'}`} href={'/'}>Inicio</Link>
          <Link className={`${pathname === '/Servicios' ? 'text-primary' : 'text-gray-700'}`} href={'/Servicios'}>Servicios</Link>
          <Link className={`${pathname === '/SobreNosotros' ? 'text-primary' : 'text-gray-700'}`} href={'/SobreNosotros'}>Sobre nosotros</Link>
          <Link className={`${pathname === '/Ayuda' ? 'text-primary' : 'text-gray-700'}`} href={'/Ayuda'}>Ayuda</Link>
        </div>
        <div className="flex flex-col gap-3">
          <button 
        onClick={()=>DeployChatBotContainer(true)}
        className="flex gap-1 text-2xl border rounded-full h-10 w-full justify-center items-center bg-primary text-white shadow-2xl cursor-pointer hover:opacity-75 transition-all duration-200 hover:scale-110">
         <BsChatDots/>
        </button>
        <Link href={'/Login'} className="bg-primary py-2 px-5 rounded-2xl text-center text-white">Iniciar sesion</Link>
        <Link href={'/Registro'} className="bg-gray-100 py-2 px-5 rounded-2xl text-center text-gray-700">Registrarse</Link>
        </div>
      </menu>
    </header>
  );
}
