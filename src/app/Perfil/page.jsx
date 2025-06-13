import Footer from "../../../components/components - globals/Footer";
import Header from "../../../components/components - globals/Header";
import SectionPerfil from "../../../components/components - perfil/Components/Section - Perfil";
import SectionTitle from "../../../components/components - perfil/Components/Section - Title";
import { Albert_Sans } from "next/font/google";

const albertsans = Albert_Sans({
    subsets: ['latin-ext']
})

export default function page() {
  return (
    <body>
        <Header/>
        <main className={`${albertsans.className}`}>
            <SectionTitle/>
            <SectionPerfil/>
        </main>
        <Footer/>
    </body>
  )
}
