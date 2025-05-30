import Footer from "../../components/components - globals/Footer"
import Header from "../../components/components - globals/Header"
import SectionPuntoGob from "../../components/components - Home/components/Section - PuntoGob"
import SectionSearch from "../../components/components - Home/components/Section - Search"
import SectionServicios from "../../components/components - Home/components/Section - Servicios"
import SectionComentarios from "../../components/components - Home/components/Section-comentarios"

export default function page() {
  return (
    <body>
        <Header/>
        <main>
            <SectionSearch/>
            <SectionServicios/>
            <SectionPuntoGob/>
            <SectionComentarios/>
        </main>
        <Footer/>
    </body>
  )
}
