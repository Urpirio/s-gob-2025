import Image from "next/image";
import ImgPrueba from '@/../public/img - Home/Punto-Gob-Sambil.jpg'
import { Roboto } from "next/font/google";
import { DataCardPuntoGob } from "../data/DataCardPuntoGob";

const roboto = Roboto({
    subsets: ['latin-ext']
});

export default function CardGob() {
  const CardG = DataCardPuntoGob.map(Data =>{
    return (
    <article key={Data.key} className={`border border-gray-300 w-[35%] max-w-100 min-w-80 p-5 rounded-xl flex flex-col gap-1 ${roboto.className} shadow-2xs`}>
        <header className="flex flex-col gap-2">
            <span className="text-[#0088FF] font-semibold">{Data.NombreGob}</span>
            <Image src={ImgPrueba} className="rounded-md" alt={Data.NombreGob}/>
            <span className="text-gray-500">{Data.Distancia}</span>
        </header>
        <main>
            <p className="font-semibold">{Data.Descripcion}</p>
        </main>
        <footer className="
        flex
        justify-between
        [&footer>button]:p-2
        [&footer>button]:w-[45%]
        [&footer>button]:rounded-md
        [&footer>button]:
        ">
            <button className="bg-[#D9D9D9] text-sm lg:text-base text-[#1369CC]">Detalles</button>
            <button className="bg-[#1369CC] text-sm lg:text-base text-white">solicitar servicio</button>
        </footer>
        </article>

  )
  })

  return(CardG)
}
