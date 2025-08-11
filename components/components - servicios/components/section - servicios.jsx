"use client";
import AboutServices from "../subcomponents/AboutServices";
import CardServicios from "../subcomponents/CardServicios";
import { Func_AboutServices } from "../func/Func - AboutServices";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export let SetStateAbout;
export default function SectionServicios() {
  const { ChangeAboutS, DataAboutServicies, StateAbout, setStateAbout } =
    Func_AboutServices();
  SetStateAbout = setStateAbout;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 667);
    };
    //Arraglar
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="bg-[#F3F3F3] flex">
      <div
        className={`${
          isMobile ? (StateAbout ? "hidden" : "flex") : "flex"
        } flex-wrap scrollbar-hide justify-center py-5 gap-5 px-2 ${
          StateAbout ? "overflow-y-scroll h-[100vh]  min-w-90 " : "w-full"
        } `}
        style={{ scrollbarWidth: "none" }}
      >
        <CardServicios
          ChangeAboutS={(Dt) => {
            ChangeAboutS({ Data: Dt });
            setStateAbout(true);
          }}
        />
      </div>

      {StateAbout && (
        <motion.div
          
          animate={{ translateX: -600, animationDuration: 1000 }}
          className={`border translate-x-150  min-w-90 flex bg-white border-y border-gray-300 px-5`}
        >
          <AboutServices Data={DataAboutServicies} />
        </motion.div>
      )}
    </section>
  );
}
