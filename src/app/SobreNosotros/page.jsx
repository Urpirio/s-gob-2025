'use client';
import Footer from "../../../components/components - globals/components/Footer";
import Header from "../../../components/components - globals/components/Header";
import { SetMenu } from "../../../components/components - globals/components/Header";

export default function SobreNosotros() {
  return (
    <body onTouchMove={()=>{SetMenu()}}>
        <Header/>
        <Footer/>
    </body>
  )
}
