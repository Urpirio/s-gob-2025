'use client';
import FormPart1 from "../subcomponents/FormPart1";
import FormPart2 from "../subcomponents/FormPart2";
import FormPart3 from "../subcomponents/FormPart3";
import { Albert_Sans } from "next/font/google";
import { useState } from "react";

const albert_Sans = Albert_Sans({
  subsets: ['latin-ext']
});

export default function SectionFormulario() {


  const [InputValues,setInputValues] = useState({
    Apellidos: String(),
    Telefono: String(),
    Nombres: String(),
    Correo:String(),
    Cedula:String(),
    Direccion:String(),
  });

  return (
    <section className={`flex justify-around md:p-10 py-10 md:py-10 flex-wrap ${albert_Sans.className}`}>
            <FormPart2
            InputValues={InputValues} 
            setInputValues={setInputValues}/>
            <FormPart1 
            InputValues={InputValues} 
            setInputValues={setInputValues}/>
            <FormPart3 
            InputsForm={InputValues}/>
    </section>
  )
};
