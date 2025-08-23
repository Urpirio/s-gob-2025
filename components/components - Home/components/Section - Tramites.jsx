import Image from "next/image";
import ImgBack from '@/../public/img - Home/ImgBackground.png';
import CardTramites from "../SubComponents/CardTramites";
import { Albert_Sans } from "next/font/google";

const Albert_sans  = Albert_Sans({
  subsets: ['latin-ext']
});

export default function SectionTramites() {

  return (
    <section className=" flex flex-col">
        <div className={`${Albert_sans.className} justify-center flex mb-10 px-5 lg:px-0`}>
                <h1 className="text-center text-4xl lg:text-5xl">Tus tramites, sin vueltas</h1>
        </div>
        <section className="relative flex ">
            <div className=" w-[100%] justify-center items-center xl:flex  z-10 hidden ">
                <Image src={ImgBack} className="h-[50%] object-contain "/>
            </div>
            <div className=" xl:absolute relative  z-20 flex flex-col justify-around  h-[100%] w-[100%] gap-10 ">
               <CardTramites />
            </div>
        </section>
    </section>
  )
}
