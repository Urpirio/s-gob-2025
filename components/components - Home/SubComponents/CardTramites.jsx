import { DataCardTramites } from "../data/DataCardTramites";
import { DataCardTramites2 } from "../data/DataCardTramites";

export default function CardTramites() {

    const Grupo1 =  DataCardTramites.map(Data =>{
        return (
            <article key={Data.Key} className="w-100 flex flex-col gap-5 justify-between h-full">
                <header>
                    <div className="p-5 bg-[#1369CC] text-white rounded-[100px] w-20 h-20 flex justify-center items-center">
                        <span className="text-5xl font-black ">{Data.numero}</span>
                    </div>
                </header>
                <main className="flex flex-col justify-between h-full">
                     <h1 className="text-3xl font-bold">{Data.titulo}</h1>
                    <p className="w-[60%]">{Data.descripcion}</p>
                </main>
            </article>
        )
    });

    const Grupo2 =  DataCardTramites2.map(Data =>{
        return (
            <article key={Data.Key} className="w-100 flex flex-col gap-5 justify-between h-full">
                <header>
                    <div className="p-5 bg-[#1369CC] text-white rounded-[100px] w-20 h-20 flex justify-center items-center">
                        <span className="text-5xl font-black ">{Data.numero}</span>
                    </div>
                </header>
                <main className="flex flex-col justify-between h-full">
                     <h1 className="text-3xl font-bold">{Data.titulo}</h1>
                    <p className="w-[50%]">{Data.descripcion}</p>
                </main>
            </article>
        )
    });

    return({
        Grupo1:Grupo1,
        Grupo2: Grupo2,
    })
  
};
