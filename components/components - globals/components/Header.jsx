'use client';
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

export let SetMenu;
export default function Header() {

  const [ Menu, setMenu ] = useState(false);
  SetMenu = setMenu;

  return (
    <header className="flex justify-between items-center shadow-2xs px-5 py-4 sticky top-0 bg-white z-50">
      <div className="flex flex-grow justify-start  w-[30%]">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <div className="hidden w-[30%] justify-center lg:flex">
        <nav className="w-[100%]  flex justify-between">
          <Link href={'/'}>Inicio</Link>
          <Link href={'/servicios'}>Servicios</Link>
          <Link href={'/sobreNosotros'}>Sobre nosotros</Link>
          <Link href={'/ayuda'}>Ayuda</Link>
        </nav>
      </div>
      <div className="hidden flex-grow justify-end gap-3  w-[30%] lg:flex">
        <button className="bg-primary py-2 px-5 rounded-2xl text-white">Iniciar sesion</button>
        <button className="bg-gray-100 py-2 px-5 rounded-2xl text-gray-700">Regitrarse</button>
        <button className="flex gap-1 items-center text-2xl">
          <TbWorld/>
          <IoIosArrowDown/>
        </button>
      </div>
      <div className="flex justify-end items-center w-[30%] lg:hidden">
        <button className="text-4xl text-primary" onClick={()=>{setMenu(!Menu)}}>
          {Menu ? <IoMdClose/> : <GiHamburgerMenu/>}
        </button>
      </div>
      <menu id="Header-Menu-Movil" className={`border-x border-b border-gray-300 absolute top-17 shadow-2xs rounded-b-2xl right-0 w-full py-5 px-10 bg-white z-50 ${Menu ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-5 mb-5">
          <Link href={'/'}>Inicio</Link>
          <Link href={'/servicios'}>Servicios</Link>
          <Link href={'/sobreNosotros'}>Sobre nosotros</Link>
          <Link href={'/ayuda'}>Ayuda</Link>
        </div>
        <div className="flex flex-col gap-3">
        <button className="bg-primary py-2 px-5 rounded-2xl text-white">Iniciar sesion</button>
        <button className="bg-gray-100 py-2 px-5 rounded-2xl text-gray-700">Regitrarse</button>
        </div>
      </menu>
    </header>
  );
}
