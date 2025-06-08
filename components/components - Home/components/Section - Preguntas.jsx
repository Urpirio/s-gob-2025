import { Albert_Sans } from "next/font/google";
import EscribirPreguntas from "../SubComponents/EscribirPreguntas";
import Preguntas from "../SubComponents/Preguntas";
import { List, ListItemButton,Collapse } from "@mui/material";

const albertsans = Albert_Sans()

export default function SectionPreguntas() {
  return (
    <section className={`flex flex-col p-5 ${albertsans}`}>
        <div className="flex justify-center p-5">
            <h1 className="text-5xl">Preguntas frecuentes</h1>
        </div>
        <section className="flex justify-around">
            <List className="w-[45%] flex flex-col justify-center gap-1">
                <Preguntas/>
            </List>
            <div className="w-[45%] ">
                <EscribirPreguntas/>
            </div>
        </section>
    </section>
  )
}
