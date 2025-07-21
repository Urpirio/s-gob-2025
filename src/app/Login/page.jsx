'use client';
import Header from "../../../components/components - globals/components/Header";
import SectionLogin from "../../../components/components - Login/components/Section - Login";
import ImgRegistro from '@/../public/img - Login/Sign up-rafiki 1.png';
import Image from "next/image";
import Footer from "../../../components/components - globals/components/Footer";
import ChatBotContainer from "../../../components/components - globals/components/ChatBotContainer";
// import { SetMenu } from "../../../components/components - globals/components/Header";

export default function Login() {

  return (
    <body onTouchMove={()=>{SetMenu()}} >
      <Header/>
      <main className="flex justify-around items-center h-[100vh]">
        <SectionLogin/>
         <section>
            <Image className="hidden lg:block" src={ImgRegistro} alt=""/>
        </section>
      </main>
      <Footer/>
      <ChatBotContainer/>
    </body>
  )
}
