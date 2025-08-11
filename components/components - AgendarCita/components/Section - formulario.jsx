"use client";
import { useFormulario } from "../Hooks/useFormulario";
import Dialog_ParaQuien from "../subcomponents/Dialog_ParaQuien";
import FormPart1 from "../subcomponents/C-Formulario/FormPart1";
import FormPart2 from "../subcomponents/C-Formulario/FormPart2";
import FormPart3 from "../subcomponents/C-Formulario/FormPart3";
import { Albert_Sans } from "next/font/google";

const albert_Sans = Albert_Sans({
  subsets: ["latin-ext"],
});

export default function SectionFormulario() {
  const {
    InputValues,
    setInputValues,
    setStatusDialogPQuien,
    StatusDialogPQuien,
  } = useFormulario();


  return (
    <section
      className={`flex justify-around md:p-10 py-10 md:py-10 flex-wrap ${albert_Sans.className}`}
    >
      <FormPart2 InputValues={InputValues} setInputValues={setInputValues} />
      <FormPart1 InputValues={InputValues} setInputValues={setInputValues} />
      <FormPart3 InputsForm={InputValues} />
      <Dialog_ParaQuien
        StatusDialog={StatusDialogPQuien}
        setStatusDialog={setStatusDialogPQuien}
      />
    </section>
  );
}
