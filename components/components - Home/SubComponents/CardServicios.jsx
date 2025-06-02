import Image from "next/image";
import LogoGOB from '@/../public/img - Home/image 4 (1).png';

export default function CardServicios() {
  return (
    <article className="border p-5 flex flex-col gap-5 rounded-2xl border-[#D9D9D9] min-w-80 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 max-w-xs md:max-w-sm">
        <header className="flex justify-start">
            <Image src={LogoGOB} className="w-50 object-contain" />
        </header>
        <main className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-blue-900 text-center">Punto Gob - Sambil</h1>
            <p className="text-gray-600 text-sm md:text-base text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis 
                explicabo, eligendi aliquam ut perspiciatis quis sint velit odio?
                Exercitationem, iusto at natus porro ad rem.
            </p>
        </main>
        <footer className="flex justify-between gap-2 mt-2">
            <button className="bg-[#D9D9D9] text-[#1369CC] font-semibold w-1/2 py-2 rounded-md hover:bg-blue-100 transition">Detalles</button>
            <button className="bg-[#1369CC] text-white font-semibold w-1/2 py-2 rounded-md hover:bg-blue-700 transition">Solicitar servicio</button>
        </footer>
    </article>
  )
}
