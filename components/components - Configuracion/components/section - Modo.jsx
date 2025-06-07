import CardModo from "../subcomponents/CardModo";

export default function SectionModo() {
  return (
    <section className="flex flex-col items-center gap-3">
    <div className="flex  w-[80%]">
        <h2 className="text-2xl">Apariencia</h2>
    </div>
    <div className="flex w-[80%]  gap-2 flex-wrap">
        <CardModo/>
    </div>
    </section>
  )
}
