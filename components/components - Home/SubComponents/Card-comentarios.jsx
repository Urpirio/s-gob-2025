'use client';
import { IoStar } from "react-icons/io5";
import { DataCardComentarios } from "../data/DataCardComentarios";
import { useState } from "react";

export default function CardComentarios() {
    const Img = 'https://i.pinimg.com/736x/76/c2/e4/76c2e44e5eec4554a6dbb73bef0a6169.jpg';

    const CardComentarios = DataCardComentarios.map(Data => {

        const [Star,setStar] = useState(Array);

        for(let x = 0; x < Data.Star; x++){
            if(Star.length === 0){
                Star.push(<IoStar/>);
            }else if(Star.length < Data.Star){
                Star.push(<IoStar/>);
            }
        };

        return(
    <article key={Data.key} className="flex flex-col gap-10 border border-gray-300 w-90 p-5 rounded-2xl min-w-70">
        <header className="flex items-center gap-5">
            <div className="
            [&div>img]:h-20
            [&div>img]:w-20
            [&div>img]:object-cover
            [&div>img]:rounded-[100%]
            
            ">
               <img src={Data.img} alt={Data.UserName} />
            </div>
            <div className="flex flex-col justify-start">
                <h1>{Data.name}</h1>
                <span className="text-[16px] text-gray-500">{Data.UserName}</span>
            </div>
        </header>
        <main>
            <p className="text-xl font-extralight">
                {Data.Comment}
            </p>
        </main>
        <footer className="flex items-center justify-end text-2xl gap-1 text-[#007AFF]">
            {Star.map(D =>{
                return(D)
            })}
        </footer>
    </article>
        )
    })
    return (CardComentarios)
};