import Image from "next/image";
import ImgPrueba from '@/../public/img - Home/Punto-Gob-Sambil.jpg'
import { Roboto } from "next/font/google";

const roboto = Roboto()

export default function CardGob() {
  return (
    <article className={`bg-white border border-blue-200 rounded-2xl shadow-lg md:max-w-sm flex flex-col gap-4 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${roboto}`}>
      <header className="flex flex-col items-center gap-3">
        <div className="w-full h-40 md:h-56 rounded-xl overflow-hidden bg-blue-100 flex items-center justify-center shadow-md mb-2 relative group">
          <Image src={ImgPrueba} alt="Punto Gob Sambil" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300 rounded-xl"></div>
        </div>
        <span className="text-blue-700 font-bold text-lg md:text-xl text-center">Punto Gob - Sambil</span>
        <span className="text-gray-400 text-xs md:text-sm text-center">1.4km de distancia - Sambil, Santo Domingo</span>
      </header>
      <main className="flex flex-col gap-2">
        <p className="font-normal text-gray-700 text-center text-base md:text-lg">
          Accede a todos los servicios del Gobierno Dominicano en un solo lugar. Rápido, seguro y digital para todos los ciudadanos.
        </p>
      </main>
      <footer className="flex justify-center gap-2 mt-2">
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold w-full py-2 rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition-all duration-200">Solicitar servicio</button>
      </footer>
    </article>
  )
}
