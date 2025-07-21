'use client';
import Image from "next/image"
import ImgRegistro from '@/../public/img - Registro/Sign up-rafiki 1.png';
import { Albert_Sans } from 'next/font/google';
import Header from '../../../components/components - globals/components/Header';
import Footer from '../../../components/components - globals/components/Footer';
import { SetMenu } from "../../../components/components - globals/components/Header";
import ChatBotContainer from "../../../components/components - globals/components/ChatBotContainer";

const albertsans = Albert_Sans({
  subsets: ['latin-ext']
})

export default function layout({children}) {
  return (
        <body className={`${albertsans.className}`}  onTouchMove={()=>{SetMenu()}} >
            <Header/>
            <main className="flex justify-around items-center h-[100vh]">
              {children}

            <section className="hidden lg:block">
                <Image src={ImgRegistro} alt=""/>
            </section>
            </main>
            <Footer/>
            <ChatBotContainer/>
        </body>
  )
}
