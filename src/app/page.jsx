import Footer from "../../components/components - globals/Footer"
import Header from "../../components/components - globals/Header"
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
        </main>
        <Footer/>
    </body>
  )
}
