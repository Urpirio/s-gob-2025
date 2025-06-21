import { Albert_Sans } from "next/font/google";
import CardGob from "../SubComponents/CardGob";

const Albert_sans = Albert_Sans({
  subsets: ['latin-ext']
});

export default function SectionPuntoGob() {
  return (
    <section className="pt-10 pb-10">
        <div className="flex flex-col text-center gap-5 pt-5 pb-10 px-1 lg:px-0">
            <h1 className={`${Albert_sans.className} text-4xl lg:text-6xl font-semibold`}>Instituciones afiliadas</h1>
            <span className={`${Albert_sans.className} font-extralight text-2xl lg:text-4xl`}>Transformando la gestión pública contigo.</span>
        </div>
        <div className="flex overflow-x-scroll  justify-start lg:justify-around p-2 gap-5 xxl:gap-0">
            <CardGob/>
        </div>
    </section>
  )
}
