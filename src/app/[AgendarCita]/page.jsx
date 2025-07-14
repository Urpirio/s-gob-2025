'use client';
import SectionFormulario from "../../../components/components - AgendarCita/components/Section - formulario";
import Footer from "../../../components/components - globals/components/Footer";
import Header from "../../../components/components - globals/components/Header";
import { SetMenu } from "../../../components/components - globals/components/Header";

export default async function page({params}) {

  const {AgendarCita} = await params;

  return (
    <body onTouchMove={()=>{SetMenu()}}>
        <Header/>
        <main>
            <SectionFormulario/>
        </main>
        <Footer/>
    </body>
  )
}
