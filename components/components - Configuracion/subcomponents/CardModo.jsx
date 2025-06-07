'use client';
import { DataCardMode } from "../Data/DataCardMode"

export default function CardModo() {

    const CardMode = DataCardMode.map(Data =>{
        return(
    <article className="flex flex-col items-center justify-center" onClick={Data.fuction}>
      <div className={` w-80 h-60 flex flex-col justify-between rounded-md border border-gray-300 ${Data.BackGround}`}> 
        <header className=" h-[30%] flex items-center">
            <div className="w-[30%] flex justify-center">
                <div className=" h-10 w-20 rounded-md bg-gray-300"></div>
            </div>
            <div className="w-[70%] h-[100%] flex items-center justify-around" >
                <div className="w-10 h-5  rounded-md bg-gray-300" ></div>
                <div className="w-10 h-5  rounded-md bg-gray-300"></div>
                <div className="w-10 h-5  rounded-md bg-gray-300"></div>
                <div className="w-10 h-5  rounded-md bg-gray-300"></div>
            </div>
        </header>
        <main className=" h-[30%] flex flex-col justify-center items-center gap-2">
            <div className=" h-5 w-50 rounded-md bg-gray-300"></div>
            <div className=" h-5 w-60 rounded-md bg-gray-300" ></div>
        </main>
        <footer className=" h-[30%] p-4">
            <div className=" h-[100%] rounded-md bg-gray-300"></div>
        </footer>
     </div>
     <div>
        <h2>{Data.titles}</h2>
     </div>
    </article>
        )
    })



  return (CardMode)
}
