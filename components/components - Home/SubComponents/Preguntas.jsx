'use client';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { DataPreguntas } from "../data/DataPreguntas";
import { List, ListItemButton,Collapse, ListItemText } from "@mui/material";
import { useState } from "react";


export default function Preguntas() {
  const preguntas = DataPreguntas.map(Data =>{
    const [Open,setOpen] = useState(false);

    return (
   <div key={Data.key}>
    <ListItemButton onClick={()=>{setOpen(!Open)}} style={{borderRadius:5,background:'#F4F4F4'}}>
      <div className="flex items-center w-[100%]">
         <ListItemText primary={Data.Pregunta}/>
          <IoIosArrowForward className={`text-[#007AFF] text-2xl 
            ${Open ? 'rotate-90' :'rotate-0'} transition-all duration-300`}/>
      </div>
    </ListItemButton>
    <Collapse in={Open} className="px-5 border-l border-r border-b rounded-b-md border-gray-400">
      <p className="text-gray-600">{Data.Respuesta}</p>
    </Collapse>
   </div>
  )
  })

  return(preguntas)
}
