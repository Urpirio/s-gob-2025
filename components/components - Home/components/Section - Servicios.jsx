import CardServicios from "../SubComponents/CardServicios";
import { Albert_Sans } from "next/font/google";
import { Carousel } from "primereact/carousel";
import { DataCardServicios } from "../data/DataCardServicios";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const albertsans = Albert_Sans({
  subsets: ["latin-ext"],
});

//Esto hay que relacionarlo con un array de datos para cuando lo conectemos a la api funciones perfectamente.

export default function SectionServicios() {
  return (
    <section className="flex flex-col gap-10 lg:gap-20 pt-10 pb-10 bg-[#EFEFEF]/50">
      <div className="text-center">
        <h1
          className={`text-4xl lg:text-6xl font-semibold ${albertsans.className}`}
        >
          Servicios más utilizados
        </h1>
      </div>
      <div
        className="flex gap-5 sm:px-5 w-full justify-center"
        // style={{ scrollbarWidth: "none", scrollbarColor: "blue" }}
      >
        <div className="w-[85%] min-w-90 flex md:justify-center">
          <Carousel
            prevIcon={() => {
              return <IoIosArrowBack className="text-5xl hidden sm:flex text-blue-500" />;
            }}
            nextIcon={() => {
              return <IoIosArrowForward className="text-5xl hidden sm:flex text-blue-500" />;
            }}
            className="w-full"
            containerClassName="flex gap-5"
            value={DataCardServicios}
            numScroll={1}
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
                <CardServicios
                  key={D?.key}
                  Titulo={D?.titulo}
                  Descripcion={D?.descripcion}
                />
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
