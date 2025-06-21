import { DataCardTramites } from "../data/DataCardTramites";
import { DataCardTramites2 } from "../data/DataCardTramites";


//Javier no toques nada todo esta casi responsive, ando trabajando en otra parte.
export default function CardTramites() {

    const Grupo1 =  DataCardTramites.map(Data =>{
        return (
             <article key={Data.Key} className=" w-70 flex flex-col  ">
                <header>
                    <div className={` p-5 ${Data.Stylenumero} flex-shrink-0 text-white rounded-[100%] w-20 h-20 flex justify-center items-center`}>
                        <span className="text-5xl font-black ">{Data.numero}</span>
                    </div>
                </header>
                <main className="flex flex-col gap-2">
                     <h1 className="text-3xl font-semibold">{Data.titulo}</h1>
                    <p className="text-[18px] text-[#686868]">{Data.descripcion}</p>
                </main>
            </article>
        )
    });

    const Grupo2 =  DataCardTramites2.map(Data =>{
        return (
             <article key={Data.Key} className=" w-70 flex flex-col  justify-between">
                <header>
                    <div className={` p-5 ${Data.Stylenumero} flex-shrink-0 text-white rounded-[100%] w-20 h-20 flex justify-center items-center`}>
                        <span className="text-5xl font-black ">{Data.numero}</span>
                    </div>
                </header>
                <main className="flex flex-col gap-2">
                     <h1 className="text-3xl font-semibold">{Data.titulo}</h1>
                    <p className="text-[18px] text-[#686868]">{Data.descripcion}</p>
                </main>
            </article>
        )
    });

    return({
        Grupo1:Grupo1,
        Grupo2: Grupo2,
    })
  
};
