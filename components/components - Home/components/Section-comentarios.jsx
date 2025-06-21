'use client'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardComentarios from "../SubComponents/Card-comentarios";
import { useNavCard } from "../../../hook/useNavCard";

export default function SectionComentarios() {

    const {Navigate} = useNavCard();

    return(
        <section className="py-10 flex flex-col gap-10">
            <div className="text-center">
                <h1 className="text-4xl">“Transformando el servicio contigo”</h1>
            </div>
           <div className="w-[100%] flex justify-around items-center lg:justify-center relative  lg:gap-10 ">
            <div className="flex  items-center w-full h-1/2 lg:w-[10%] justify-start ">
                <button onClick={()=>{Navigate({Right: false,Left: true,IdContainer: 'CardContainer'})}} className=" absolute text-6xl text-[#007AFF]">
                    <IoIosArrowBack/>
                </button>
            </div>
             <div  id="CardContainer" className="flex min-w-90 px-10 lg:px-0 justify-start  lg:justify-end   overflow-x-scroll    scrollbar-hide gap-5">
                <CardComentarios/>
            </div>
            <div  className=" flex  items-center w-full h-1/2 lg:w-[10%] justify-end " >
                <button onClick={()=>{Navigate({Right: true,Left: false,IdContainer: 'CardContainer'})}} className=" absolute text-6xl text-[#007AFF]">
                    <IoIosArrowForward/>
                </button>
            </div>
           </div>     
        </section>
    )
}