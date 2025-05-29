import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="flex flex-col md:flex-row justify-between p-4 bg-blue-500">
            <div className="flex flex-col gap-6 p-6 items-center md:items-start">
                <h1 className="text-white font-bold text-2xl md:text-[35px] text-center md:text-left">
                    Una iniciativa de
                </h1>
                <img
                    className="w-[150px] md:w-[200px]"
                    src="/src/assets/logo-nuevo.png"
                    alt=""
                />
                <img
                    className="w-[150px] md:w-[200px]"
                    src="/src/assets/Logo-gobierno-de-la-republica-dominicana-azul.png"
                    alt=""
                />
            </div>

            <div className="flex flex-col items-center justify-end gap-2 md:gap-4 md:items-end md:justify-center p-6">
                <div className="text-xl md:text-[30px] font-bold text-white text-center md:text-right">
                    Estamos <span className="text-blue-300">Cumpliendo</span>
                </div>
                <div className="text-xl md:text-[30px] font-bold text-white text-center md:text-right">
                    <span className="text-blue-300">Estamos</span> Cambiando
                </div>
            </div>
        </div>
    </footer>
  )
}
