'use client';
import Footer from "../../../components/components - globals/components/Footer";
import Header from "../../../components/components - globals/components/Header";
import SectionBuscador from "../../../components/components - servicios/components/section - buscador";
import SectionServicios from "../../../components/components - servicios/components/section - servicios";
import { SetMenu } from "../../../components/components - globals/components/Header";

export default function Servicios() {
  return (
    <body onTouchMove={()=>{SetMenu()}}>
        <Header/>
        <main>
          <SectionBuscador/>
          <SectionServicios/>
        </main>
        <Footer/>
    </body>
  )
}
