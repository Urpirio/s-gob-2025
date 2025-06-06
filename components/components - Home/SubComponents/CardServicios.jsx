import Image from "next/image";
import LogoGOB from '@/../public/img - Home/image 4 (1).png';

export default function CardServicios() {
  return (
    <article className="bg-white border border-blue-200 rounded-2xl shadow-lg max-w-xs md:max-w-sm flex flex-col gap-4 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <header className="flex flex-col items-center gap-3">
        <div className="w-full rounded-xl overflow-hidden bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center shadow-md mb-2">
          <Image src={LogoGOB} alt="Logo Servicio" className="object-contain w-24 md:w-32 mx-auto" />
        </div>
      </header>
      <main className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900 text-center">Punto Gob - Sambil</h1>
        <p className="text-gray-600 text-sm md:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis 
          explicabo, eligendi aliquam ut perspiciatis quis sint velit odio?
          Exercitationem, iusto at natus porro ad rem.
        </p>
      </main>
      <footer className="flex justify-center gap-2 mt-2">
        <button className="bg-gradient-to-r from-blue-100 to-blue-300 text-blue-700 font-semibold w-1/2 py-2 rounded-xl shadow hover:from-blue-200 hover:to-blue-400 transition-all">Detalles</button>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold w-1/2 py-2 rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition-all">Solicitar servicio</button>
      </footer>
    </article>
  )
}
