import Image from "next/image";
import ImgPrueba from "@/../public/img - Home/Punto-Gob-Sambil.jpg";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin-ext"],
});

export default function CardGob({ NombreGob, Distancia, Descripcion, key }) {
  return (
    <article
      key={key}
      className={`border border-gray-300 w-1/3 min-w-79 rounded-xl flex flex-col gap-1 ${roboto.className} shadow-2xs`}
    >
      <div className="flex flex-col gap-2 p-1">
        <Image src={ImgPrueba} className="rounded-xl" alt={NombreGob} />
      </div>
      <div className="p-2">
        <div className="flex flex-col gap-2">
          <span className="text-[#0088FF] font-semibold">{NombreGob}</span>
          <span className="text-gray-500">{Distancia}</span>
          <p className="">{Descripcion}</p>
        </div>

        <div
          className="
        flex
        justify-between
        [&_button]:p-2
        [&_button]:w-[45%]
        [&_button]:rounded-md
        pt-2
        "
        >
          <button className="bg-gray-100 text-sm xxl:text-base text-primary-light">
            Detalles
          </button>
          <button className="bg-primary-light text-sm xxl:text-base text-white">
            solicitar servicio
          </button>
        </div>
      </div>
    </article>
  );
}
