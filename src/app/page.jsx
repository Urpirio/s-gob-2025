import Footer from "../../components/components - globals/Footer"
import Header from "../../components/components - globals/Header"
import SectionPreguntas from "../../components/components - Home/components/Section - Preguntas"
import SectionPuntoGob from "../../components/components - Home/components/Section - PuntoGob"
import SectionSearch from "../../components/components - Home/components/Section - Search"
import SectionServicios from "../../components/components - Home/components/Section - Servicios"
import SectionTramites from "../../components/components - Home/components/Section - Tramites"

export default function page() {
  return (
    <body>
        <Header/>
        <main>
            <SectionSearch/>
            <SectionServicios/>
            <SectionPuntoGob/>
            <SectionTramites/>
            <SectionPreguntas/>
        </main>
        <Footer/>
    </body>
  )
}
