import { ProgressBar } from "primereact/progressbar";
import { DataCardPg } from "../data/DataCardPg";

export default function Card_PuntoGob() {
  const BarraProgreso = ({ Porcentaje }) => {
    if (Porcentaje < 29) {
      //Bajo
      return (
        <div className="flex items-center justify-between">
          <ProgressBar
            showValue={false}
            value={Porcentaje}
            color="#5DB975"
            className="h-2 w-full rounded-md font-semibold text-white"
          />
           <span className="text-xs font-bold">{Porcentaje}%</span>
        </div>
      );
    } else if (
      (Porcentaje > 30 || Porcentaje == 30) &&
      (Porcentaje < 69 || Porcentaje == 69)
    ) {
      //Medio
      return (
        <div className="flex items-center justify-between">
            <ProgressBar
          showValue={false}
          value={Porcentaje}
          color="#33A0FF"
          className="h-2 w-full rounded-md font-semibold text-white"
        />
         <span className="text-xs font-bold">{Porcentaje}%</span>
        </div>
      );
    } else if (
      (Porcentaje > 70 || Porcentaje == 70) &&
      (Porcentaje < 89 || Porcentaje == 89)
    ) {
      //Alto
      return (
        <div className="flex items-center justify-between">
            <ProgressBar
          showValue={false}
          value={Porcentaje}
          color="#EECD35"
          className="h-2 w-full rounded-md font-semibold text-white"
        />
         <span className="text-xs font-bold">{Porcentaje}%</span>
        </div>
      );
    } else if (Porcentaje > 90 || Porcentaje == 90) {
      // Muy Alto
      return (
       <div className="flex items-center justify-between">
         <ProgressBar
          showValue={false}
          value={Porcentaje}
          color="#FF0000"
          className="h-2 w-full rounded-md font-semibold text-white"
        />
        <span className="text-xs font-bold">{Porcentaje}%</span>
       </div>
      );
    }
  };

  const NivelFlujo = ({ Porcentaje }) => {
    if (Porcentaje < 29) {
      return <span className="text-xs">Flujo bajo</span>;
    } else if (
      (Porcentaje > 30 || Porcentaje == 30) &&
      (Porcentaje < 69 || Porcentaje == 69)
    ) {
      return <span className="text-xs">Flujo medio</span>;
    } else if (
      (Porcentaje > 70 || Porcentaje == 70) &&
      (Porcentaje < 89 || Porcentaje == 89)
    ) {
      return <span className="text-xs">Flujo alto</span>;
    } else if (Porcentaje > 90 || Porcentaje == 90) {
      return <span className="text-xs">Flujo muy alto</span>;
    }
  };

  const Card = DataCardPg.map((D) => {
    return (
      <div className="p-3 flex flex-col gap-2   border lg:w-[45%] min-w-50 bg-gray-200/30 border-gray-200 shadow-xl shadow-gray-100/10 rounded-lg">
        <div>
          <h5 className="md:text-sm text-xs">Punto GOB - Megacentro</h5>
          <NivelFlujo Porcentaje={D?.Porcentaje} />
        </div>
        <BarraProgreso Porcentaje={D?.Porcentaje} />
      </div>
    );
  });

  return Card;
}
