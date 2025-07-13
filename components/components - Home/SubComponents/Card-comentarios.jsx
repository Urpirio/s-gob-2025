'use client';
import { IoStar } from "react-icons/io5";
import { useState } from "react";

export default function CardComentarios({Data}) {

        const [Star,setStar] = useState(Array);

        for(let x = 0; x < Data?.Star; x++){
            if(Star.length === 0){
                Star.push(<IoStar/>);
            }else if(Star.length < Data?.Star){
                Star.push(<IoStar/>);
            }
        };

        return(
    <div key={Data?.key} className="sm:p-5 h-full">
        <article id={Data?.id} 
            className="flex flex-col gap-4 sm:gap-10 border border-gray-300 w-full h-full p-5 rounded-2xl ">
            <header className="flex items-center gap-5">
                <div className="

                [&_img]:sm:h-20
                [&_img]:sm:w-20
                [&_img]:object-cover
                [&_img]:rounded-[100%]">
               <img className="h-10 w-10" src={Data?.img} alt={Data?.UserName} />
                </div>
                <div className="flex flex-col justify-start">
                    <h1 className="text-sm  sm:text-xl">{Data?.name}</h1>
                    <span className=" text-xs sm:text-[16px] text-gray-500">{Data?.UserName}</span>
                </div>
            </header>
            <main>
                <p className="sm:text-xl text-xs font-extralight">{Data?.Comment}</p>
            </main>
            <footer className="flex items-center justify-end text-2xl gap-1 text-primary">
                {Star?.map(D =>{
                return(D)
                })}
            </footer>
        </article>
    </div>
)

};