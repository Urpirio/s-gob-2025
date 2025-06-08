import Image from "next/image"
import ImgRegistro from '@/../public/img - Registro/Sign up-rafiki 1.png';
import { Albert_Sans } from 'next/font/google';

const albertsans = Albert_Sans({
  subsets: ['latin-ext']
})

export default function layout({children}) {
  return (
        <body className={`flex justify-around items-center h-[100vh] ${albertsans.className}`}>
            
            {children}

            <section>
                <Image src={ImgRegistro} alt=""/>
            </section>
  
        </body>
  )
}
