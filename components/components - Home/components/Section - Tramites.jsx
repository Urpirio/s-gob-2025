import Image from "next/image";
import ImgBack from '@/../public/img - Home/ImgBackground.png';
import CardTramites from "../SubComponents/CardTramites";
import { Albert_Sans } from "next/font/google";

const Albert_sans  = Albert_Sans();

export default function SectionTramites() {

    const { Grupo1 , Grupo2 } = CardTramites();


  return (
    <section className="flex flex-col min-h-[80vh] py-8 md:py-16 bg-gradient-to-b from-blue-50 to-white items-center">
        <div className={`${Albert_sans} text-3xl md:text-5xl flex justify-center font-bold mb-8 md:mb-12 text-blue-900 drop-shadow-sm w-full`}>
            <h1 className="mx-auto">Tus trámites, sin vueltas</h1>
        </div>
        <section className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 z-20">
                
                <div className="flex flex-col gap-10 md:gap-10">
                    {Grupo1}
                </div>


                {/* <div className="rounded-3xl p-6 md:p-12 w-full max-w-2xl flex justify-center items-center"> */}
                  <Image src={ImgBack} className="md:h-[500px] w-full max-w-4xl object-cover" alt="Fondo trámites" />
                {/* </div> */}


                <div className="flex flex-col gap-10 md:gap-10   ">
                    {Grupo2}
                </div>
            </div>
        </section>
    </section>
  )
}
