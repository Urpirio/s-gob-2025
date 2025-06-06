import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";



export default function SectionSearch() {
  return (
 
     <section className="flex-1 flex flex-col justify-center items-center px-4 pt-20 pb-10">
        <h1 className="flex flex-col  animate-pulse  text-center text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-semibold">
          <span>Hola, ¿qué vamos</span>
          <span className="flex flex-wrap justify-center gap-5">
            a{" "}
            <span className="font-semibold text-blue-300">gestionar</span>{" "}
            hoy?
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl m-12 text-center">
          Gestiona tus trámites con mayor precisión, mejor enfoque y sin perder el tiempo.
        </p>
        <div className="bg-gray-300 pl-2 w-full max-w-xl flex justify-between items-center rounded-[25px] h-[55px]">
          <div className="bg-blue-500 flex items-center justify-center w-[45px] rounded-full h-[45px]">
            <CiSearch className="text-3xl text-white "/>
          </div>
          <div className="flex bg-white focus:outline-none items-center  rounded-full p-2 pr-3 ml-2">
            <input
              className=" focus:outline-none  text-center  "
              type="text"
              placeholder=" ¿Donde Estas?"
              
            />
            <IoLocationSharp className="text-blue-600 text-[20px]" />

          </div>
        </div>
      </section>
  )
}
