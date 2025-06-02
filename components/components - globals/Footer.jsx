import React from 'react'
import CupulaLogo from '@/../public/img - Home/Cupula.92806960.svg';
import OgticLogo from '@/../public/img - Home/logoOgtic.ac56395c.svg';

export default function Footer() {
  return (
    <footer>
        <div className="flex flex-col md:flex-row justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-400">
            <div className="flex flex-col gap-6 p-6 items-center md:items-start">
                <h1 className="text-white font-bold text-2xl md:text-[35px] text-center md:text-left drop-shadow-lg">
                    Una iniciativa de
                </h1>
                <img
                    className="w-[200px] md:w-[200px] drop-shadow-md rounded-lg p-2"
                    src={CupulaLogo.src}
                    alt="Logo SGL"
                />
                <img
                    className="w-[150px] md:w-[200px] drop-shadow-md  rounded-lg p-2"
                    src={OgticLogo.src}
                    alt="Logo OGTIC"
                />
            </div>

            <div className="flex flex-col items-center justify-end gap-2 md:gap-4 md:items-end md:justify-center p-6">
                <div className="text-xl md:text-[30px] font-bold text-white text-center md:text-right drop-shadow-lg">
                    Estamos <span className="text-blue-200 animate-pulse">Cumpliendo</span>
                </div>
                <div className="text-xl md:text-[30px] font-bold text-white text-center md:text-right drop-shadow-lg">
                    <span className="text-blue-200 animate-pulse">Estamos</span> Cambiando
                </div>
                <div className="mt-4 text-white text-xs md:text-sm opacity-80 text-center md:text-right">
                    &copy; {new Date().getFullYear()} Gobierno de la República Dominicana. Todos los derechos reservados.
                </div>
            </div>
        </div>
    </footer>
  )
}
