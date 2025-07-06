import Sectionforms from "../../../components/components - Configuracion/components/section - forms";
import SectionModo from "../../../components/components - Configuracion/components/section - Modo";
import SectionTitlesConfiguracion from "../../../components/components - Configuracion/components/section - TitlesConfiguracion";
import Header from "../../../components/components - globals/components/Header";

export default function page() {
  return (
    <body>
        <Header/>
        <main className="flex flex-col justify-center p-10 gap-5">
            <SectionTitlesConfiguracion/>
            <SectionModo/>
            <Sectionforms/>
        </main>
    </body>
  )
}
