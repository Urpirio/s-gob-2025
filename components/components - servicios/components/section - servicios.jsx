'use client';
import AboutServices from "../subcomponents/AboutServices";
import CardServicios from "../subcomponents/CardServicios";
import {  Func_AboutServices } from "../func/Func - AboutServices";

export default function SectionServicios() {

  const {ChangeAboutS,DataAboutServicies,StateAbout,setStateAbout} = Func_AboutServices();

  


  return (
    <section className="bg-[#F3F3F3] flex justify-center" >
        <div className={`flex flex-wrap justify-center py-5 gap-5  max-w-400 ${StateAbout ? "overflow-y-scroll h-[100vh]" : ''} `} 
          style={{scrollbarWidth:'none',scrollbarColor:'blue'}}>
            <CardServicios ChangeAboutS={
              (Dt)=>{
                ChangeAboutS({Data:Dt})
                setStateAbout(true);
              }
            }/>
        </div>
          {StateAbout ? <div className={` w-[200%] bg-white`} >
          <AboutServices Data={DataAboutServicies}/>
          </div> : ''}
    </section>
  )
}
