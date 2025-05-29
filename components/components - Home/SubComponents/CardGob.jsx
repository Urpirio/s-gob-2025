import Image from "next/image";
import ImgPrueba from '@/../public/img - Home/Punto-Gob-Sambil.jpg'
import { Roboto } from "next/font/google";

const roboto = Roboto()

export default function CardGob() {
  return (
    <article className={`border border-gray-400 w-[28%] p-5 rounded-xl flex flex-col gap-1 ${roboto}`}>
        <header>
            <span className="text-[#0088FF] font-semibold">Punto Gob - Sambil</span>
            <Image src={ImgPrueba}/>
            <span className="text-gray-500">1.4km de distancia - Sambil, Santo Domingo</span>
        </header>
        <main>
            <p className="font-semibold">
                Encuentra todos los servicios del Gobierno Dominicano en 
                un solo Portal. Acceso rápido, seguro y digital a trámites
                 y servicios para todos los ciudadanos.
            </p>
        </main>
        <footer className="
        flex
        justify-between
        [&footer>button]:p-2
        [&footer>button]:w-[45%]
        [&footer>button]:rounded-md
        [&footer>button]:
        ">
            <button className="bg-[#D9D9D9] text-[#1369CC]">Detalles</button>
            <button className="bg-[#1369CC] text-white">solicitar servicio</button>
        </footer>
    </article>
  )
}
