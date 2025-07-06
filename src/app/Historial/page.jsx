'use client';
import Footer from '../../../components/components - globals/components/Footer';
import Header from '../../../components/components - globals/components/Header';
import SectionTitleHistorial from '../../../components/components - Historial/components/Section - TitleHistorial';
import SectionTableHistorial from '../../../components/components - Historial/components/Section - TableHistorial';
import { SetMenu } from '../../../components/components - globals/components/Header';

export default function page() {

  

  return (
    <body onTouchMove={()=>{SetMenu()}}>
        <Header/>
        <main>
          <SectionTitleHistorial/>
          <SectionTableHistorial/>
        </main>
      <Footer/>
    </body>
  )
}

