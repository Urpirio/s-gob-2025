
import { IoStar } from "react-icons/io5";
import Image from "next/image";




export default function CardComentarios() {
    const Img = 'https://i.pinimg.com/736x/76/c2/e4/76c2e44e5eec4554a6dbb73bef0a6169.jpg'
return (
    <article className="flex flex-col gap-10 border border-gray-300 w-90 p-5 rounded-2xl">
        <header className="flex items-center gap-5">
            <div className="
            [&div>img]:h-20
            [&div>img]:w-20
            [&div>img]:object-cover
            [&div>img]:rounded-[100%]
            
            ">
               <img src="https://i.pinimg.com/736x/76/c2/e4/76c2e44e5eec4554a6dbb73bef0a6169.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-start">
                <h1>Juana Hernandez</h1>
                <span className="text-[16px] text-gray-500">@juana.hernandez_</span>
            </div>
        </header>
        <main>
            <p className="text-xl font-extralight">
                “Desde que empece a gestionar mis 
                 citas desde Gestion sin limites todo
                 es mas facil.”
            </p>
        </main>
        <footer className="flex items-center justify-end text-2xl gap-1 text-[#007AFF]">
            <IoStar/>
            <IoStar/>
            <IoStar/>
            <IoStar/>
            <IoStar/>
        </footer>
    </article>
)
}