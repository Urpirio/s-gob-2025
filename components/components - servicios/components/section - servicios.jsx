import CardServicios from "../subcomponents/CardServicios";

export default function SectionServicios() {
  return (
    <section>
        <div className="flex flex-wrap justify-center py-5 gap-5 bg-[#F3F3F3]">
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
            <CardServicios/>
        </div>
    </section>
  )
}
