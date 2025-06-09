import Header from "../../../components/components - globals/Header";
import SectionLogin from "../../../components/components - Login/components/Section - Login";
import ImgRegistro from '@/../public/img - Login/Sign up-rafiki 1.png';
import Image from "next/image";

export default function Login() {
  return (
    <body>
      {/* <Header/> */}
      <main className="flex justify-around items-center h-[100vh]">
        <SectionLogin/>
         <section>
            <Image src={ImgRegistro} alt=""/>
        </section>
      </main>
    </body>
  )
}
