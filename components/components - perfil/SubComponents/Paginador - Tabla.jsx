import { GoKebabHorizontal } from "react-icons/go";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

export default function PaginacionTabla() {
  return (
 <article className="flex w-full justify-end items-center">
            <div className="flex items-center"> 
                <button className="flex items-center gap-2 text-gray-500 border border-gray-300 rounded-l-md px-4 py-2">
                    <IoMdArrowBack className="text-2xl text-gray-500" />
                    <span>Anterior</span>
                </button>
            <div className="flex items-center border-y border-gray-300 
            [&>span]:h-10
            [&>span]:w-10
            [&>span]:flex
            [&>span]:items-center
            [&>span]:justify-center
            [&>span]:text-gray-500">
            <span className=" bg-gray-50">1</span>
            <span>2</span>
            <span>3</span>
            <span >
                <GoKebabHorizontal/>
            </span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            </div>
                <button className="flex items-center gap-2 text-gray-500 border border-gray-300 rounded-r-md px-4 py-2">
                    <span>Siguiente</span>
                    <IoMdArrowForward className="text-2xl text-gray-500" />
                </button>
            </div>
       </article>
  )
}