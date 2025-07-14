'use client';
import SectionPerfil from "../../../components/components - perfil/Components/Perfil/Section - Perfil";
import { Albert_Sans } from "next/font/google";

const albertsans = Albert_Sans({
    subsets: ['latin-ext']
});

export default function page() {
  return (
        <main className={`${albertsans.className} w-[70%]`}>
            <SectionPerfil/>
        </main>
  )
};
