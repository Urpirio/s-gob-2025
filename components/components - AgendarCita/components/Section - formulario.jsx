import FormPart1 from "../subcomponents/FormPart1";
import FormPart2 from "../subcomponents/FormPart2";
import FormPart3 from "../subcomponents/FormPart3";
import { Albert_Sans } from "next/font/google";

const albert_Sans = Albert_Sans({
  subsets: ['latin-ext']
});

export default function SectionFormulario() {
  return (
    <section className={`flex justify-around md:p-10 py-10 md:py-10 flex-wrap ${albert_Sans.className}`}>
            <FormPart2/>
            <FormPart1/>
            <FormPart3/>
    </section>
  )
};
