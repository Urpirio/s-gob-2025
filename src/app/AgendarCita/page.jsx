'use client'
import SectionFormulario from "../../../components/components - AgendarCita/components/Section - formulario";
import Footer from "../../../components/components - globals/Footer";
import Header from "../../../components/components - globals/Header";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function page() {

    // const router = useRouter();
    const Data = useSearchParams();

  return (
    <body>
        <Header/>
        <main>
            <SectionFormulario/>
        </main>
        <Footer/>
    </body>
  )
}
