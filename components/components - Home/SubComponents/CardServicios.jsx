import Image from "next/image";
import LogoGOB from '@/../public/img - Home/image 4 (1).png';

export default function CardServicios() {
  return (
    <article className="border p-5 flex flex-col gap-5 rounded-xl border-[#D9D9D9] min-w-80 bg-white">
        <header className="flex justify-start">
            <Image src={LogoGOB} className=" w-50 object-contain"/>
        </header>
        <main>
            <h1 className="text-2xl font-semibold">Punto Gob - Sambil</h1>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis 
            explicabo, eligendi aliquam ut perspiciatis quis sint velit odio?
            Exercitationem, iusto at natus porro ad rem.
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
