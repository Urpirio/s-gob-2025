import AboutServices from "../subcomponents/AboutServices";
import CardServicios from "../subcomponents/CardServicios";

export default function SectionServicios() {
  return (
    <section className="bg-[#F3F3F3] flex justify-center" >
        <div className="flex flex-wrap justify-center py-5 gap-5  max-w-400 overflow-y-scroll h-[100vh]" style={{scrollbarWidth:'none',scrollbarColor:'blue'}}>
            <CardServicios/>
        </div>
        <div className={` w-[200%] bg-white`} >
          <AboutServices/>
        </div>
    </section>
  )
}
