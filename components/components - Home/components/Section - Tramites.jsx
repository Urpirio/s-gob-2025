import Image from "next/image";
import ImgBack from '@/../public/img - Home/ImgBackground.png';
import CardTramites from "../SubComponents/CardTramites";
import { Albert_Sans } from "next/font/google";

const Albert_sans  = Albert_Sans();

export default function SectionTramites() {

    const { Grupo1 , Grupo2 } = CardTramites();


  return (
    <section className=" flex flex-col">
        <div className={`${Albert_sans} text-5xl justify-center flex`}>
                <h1 className="">Tus tramites, sin vueltas</h1>
        </div>
        <section className="relative flex ">
            <div className=" w-[100%] justify-center items-center xl:flex  z-10 hidden ">
                <Image src={ImgBack} className="h-[50%] object-contain "/>
            </div>
            <div className=" xl:absolute relative  z-20 flex flex-col justify-around  h-[100%] w-[100%] gap-10 ">
               <div className="flex justify-around w-[100%] flex-wrap ">
                {Grupo1}
               </div> 
               <div className="flex justify-around w-[100%] flex-wrap">
                {Grupo2}
               </div>
            </div>
        </section>
    </section>
  )
}
