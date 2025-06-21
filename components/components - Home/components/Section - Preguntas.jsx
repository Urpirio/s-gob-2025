import { Albert_Sans } from "next/font/google";
import EscribirPreguntas from "../SubComponents/EscribirPreguntas";
import Preguntas from "../SubComponents/Preguntas";
import { List, ListItemButton,Collapse  } from "@mui/material";

const albertsans = Albert_Sans({
  subsets: ['latin-ext']
});

export default function SectionPreguntas() {
  return (
    <section className={`flex flex-col px-5 py-10 ${albertsans.className}`}>
        <div className="flex justify-center py-5">
            <h1 className=" text-3xl text-center lg:text-5xl">Preguntas frecuentes</h1>
        </div>
        <section className="flex flex-wrap w-[100%] justify-center items-center md:justify-around ">
            <List className="w-[45%] flex flex-col justify-center gap-1 min-w-80">
                <Preguntas/>
            </List>
            <div className="w-[45%] min-w-90 flex justify-center">
                <EscribirPreguntas/>
            </div>
        </section>
    </section>
  )
}
