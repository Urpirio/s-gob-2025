import { Albert_Sans } from "next/font/google";
import CardGob from "../SubComponents/CardGob";

const Albert_sans = Albert_Sans()

export default function SectionPuntoGob() {
  return (
    <section className="pt-10 pb-10 min-h-[600px] max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 pt-5 pb-10">
            <h1 className={`${Albert_sans} text-6xl font-semibold`}>Instituciones afiliadas</h1>
            <span className={`${Albert_sans} font-extralight text-4xl`}>“Transformando la gestion publica contigo”</span>
        </div>
        <div className="flex justify-around">
            <CardGob/>
            <CardGob/>
            <CardGob/>
        </div>
    </section>
  )
}
