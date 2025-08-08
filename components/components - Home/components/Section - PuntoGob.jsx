import { Albert_Sans } from "next/font/google";
import CardGob from "../SubComponents/CardGob";
import { Carousel } from "primereact/carousel";
import { DataCardPuntoGob } from "../data/DataCardPuntoGob";

const Albert_sans = Albert_Sans({
  subsets: ["latin-ext"],
});

export default function SectionPuntoGob() {
  return (
    <section className="pt-10 pb-10">
      <div className="flex flex-col text-center gap-5 pt-5 pb-10 px-1 lg:px-0">
        <h1
          className={`${Albert_sans.className} text-4xl lg:text-6xl font-semibold`}
        >
          Instituciones afiliadas
        </h1>
        <span
          className={`${Albert_sans.className} font-extralight text-2xl lg:text-4xl`}
        >
          Transformando la gestión pública contigo.
        </span>
      </div>
      <div className="flex w-full justify-center sm:p-2 ">
        <Carousel
          className="sm:w-[80%] w-full"
          containerClassName="flex gap-5"
          value={DataCardPuntoGob}
          prevIcon={() => {}}
          nextIcon={() => {}}
          numVisible={3}
          autoplayInterval={5000}
          responsiveOptions={[
            {
              breakpoint: "667px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
          itemTemplate={(D) => {
            return (
              <CardGob
                key={D?.key}
                NombreGob={D?.NombreGob}
                Distancia={D?.Distancia}
                Descripcion={D?.Descripcion}
              />
            );
          }}
        />
      </div>
    </section>
  );
}
