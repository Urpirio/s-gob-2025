'use client';
import Footer from "../../../components/components - globals/components/Footer";
import Header from "../../../components/components - globals/components/Header";
import SectionPerfil from "../../../components/components - perfil/Components/Section - Perfil";
import SectionTitle from "../../../components/components - perfil/Components/Section - Title";
import { Albert_Sans } from "next/font/google";
import { SetMenu } from "../../../components/components - globals/components/Header";

const albertsans = Albert_Sans({
    subsets: ['latin-ext']
})

export default function page() {
  return (
    <body onTouchMove={()=>{SetMenu()}}>
        <Header/>
        <main className={`${albertsans.className}`}>
            <SectionTitle/>
            <SectionPerfil/>
        </main>
        <Footer/>
    </body>
  )
}
