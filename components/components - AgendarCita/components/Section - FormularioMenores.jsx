"use client";
import FormPart1 from "../subcomponents/M-Formulario/FormPart1";
import { Albert_Sans } from "next/font/google";
import FormPart2 from "../subcomponents/M-Formulario/FormPart2";
import FormPart3 from "../subcomponents/M-Formulario/FormPart3";
import { useFormulario } from "../Hooks/useFormulario";

const albert_Sans = Albert_Sans({
  subsets: ["latin-ext"],
});

export default function Section_FormularioMenores() {
  const {
    InputValues,
    setInputValues,
    DropdownPGob,
    DropdownTramite,
    setDropdownPGob,
    setDropdownTramite,
  } = useFormulario();

  return (
    <section
      className={`flex md:justify-around items-center px-5 md:px-10 md:py-10 w-full flex-wrap  ${albert_Sans.className}`}
    >
      <div className="flex items-center gap-5  flex-wrap justify-around ">
        <FormPart1 InputValues={InputValues} setInputValues={setInputValues} />
        <FormPart2
          DropdownPGob={DropdownPGob}
          DropdownTramite={DropdownTramite}
          setDropdownPGob={setDropdownPGob}
          setDropdownTramite={setDropdownTramite}
        />
      </div>
      <FormPart3 />
    </section>
  );
}
