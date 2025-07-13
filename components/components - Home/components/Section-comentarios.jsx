'use client'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardComentarios from "../SubComponents/Card-comentarios";
import { Carousel } from 'primereact/carousel';
import { DataCardComentarios } from "../data/DataCardComentarios";

export default function SectionComentarios() {

     const responsiveOptions = [
        {
            breakpoint: '667px',
            numVisible: 1,
        },
     ]

    return(
        <section className="py-10 flex flex-col gap-10">
            <div className="text-center">
                <h1 className="text-4xl">“Transformando el servicio contigo”</h1>
            </div>
             <div  id="CardContainer" className="flex  w-full md:px-10 justify-center" style={{scrollbarWidth:'none'}}>
                <Carousel 
                value={DataCardComentarios} 
                numVisible={3} className=" w-[100%]   " 
                autoplayInterval={3000}
                responsiveOptions={responsiveOptions}
                containerClassName="flex gap-10"
                nextIcon={<IoIosArrowForward  className="text-4xl text-primary"/>}
                prevIcon={<IoIosArrowBack className="text-4xl text-primary"/>}
                itemTemplate={(D)=><CardComentarios Data={D}/>}/>
            </div>
        </section>
    )
}