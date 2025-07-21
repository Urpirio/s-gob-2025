'use client';
import Footer from "../../components/components - globals/components/Footer";
import Header from "../../components/components - globals/components/Header";
import SectionInputSearch from "../../components/components - Home/components/Section - InputSearch";
import SectionPreguntas from "../../components/components - Home/components/Section - Preguntas";
import SectionPuntoGob from "../../components/components - Home/components/Section - PuntoGob"
import SectionSearch from "../../components/components - Home/components/Section - Search"
import SectionServicios from "../../components/components - Home/components/Section - Servicios"
import SectionTramites from "../../components/components - Home/components/Section - Tramites";
import SectionComentarios from "../../components/components - Home/components/Section-comentarios";
import { SetMenu } from "../../components/components - globals/components/Header";
import ChatBotContainer from "../../components/components - globals/components/ChatBotContainer";

export default function Home() {


  return (
    <body  onTouchMove={()=>{SetMenu()}}>
        <Header/>
        <main>
            <SectionSearch/>
            <SectionInputSearch/>
            <SectionServicios/>
            <SectionPuntoGob/>
            <SectionTramites/>
            <SectionPreguntas/>
            <SectionComentarios/>
        </main>
        <Footer/>
        <ChatBotContainer/>
    </body>
  )
}
