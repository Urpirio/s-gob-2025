import SectionFormulario from "../../../../components/components - perfil/Components/SoporteTI/Section - Formulario";
import SectionAsistencia from "../../../../components/components - perfil/Components/SoporteTI/Section - Asistencia";

export default function page() {
  return (
        <main className="flex   gap-38 py-5 flex-wrap justify-center">
          <SectionAsistencia/>
          <SectionFormulario/>
        </main>
  )
}
