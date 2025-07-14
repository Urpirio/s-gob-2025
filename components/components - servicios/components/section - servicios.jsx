'use client';
import AboutServices from "../subcomponents/AboutServices";
import CardServicios from "../subcomponents/CardServicios";
import {  Func_AboutServices } from "../func/Func - AboutServices";
import { useState, useEffect } from "react";

export let SetStateAbout;
export default function SectionServicios() {

  const {ChangeAboutS,DataAboutServicies,StateAbout,setStateAbout} = Func_AboutServices();
  SetStateAbout = setStateAbout;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 667);
    };
    //Arraglar
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="bg-[#F3F3F3] flex" >
        <div className={`${isMobile ? StateAbout ? 'hidden' : 'flex' : 'flex'} flex-wrap scrollbar-hide justify-center py-5 gap-5  lg:px-0 ${StateAbout ? "overflow-y-scroll h-[100vh]  min-w-90 " : 'w-full'} `} >
            <CardServicios ChangeAboutS={
              (Dt)=>{
                ChangeAboutS({Data:Dt})
                setStateAbout(true);
              }
            }/>
        </div>
          <div className={`border min-w-90 border-black ${StateAbout ? 'flex ' : 'hidden'} bg-white border-y border-gray-300 px-5`} >
          {StateAbout ? <AboutServices Data={DataAboutServicies}/> : <div/>}
          </div> 
    </section>
  )
}
