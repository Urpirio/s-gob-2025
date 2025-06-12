'use client';
import { useState } from "react";

export const Func_AboutServices = () => {

    const [DataAboutServicies,setDataAboutServicies] = useState();
    const [StateAbout,setStateAbout] = useState(false)

    const ChangeAboutS = ({Data}) => {
        setDataAboutServicies(Data);
    };

    return({
        ChangeAboutS: ChangeAboutS,
        DataAboutServicies: DataAboutServicies,
        setStateAbout: setStateAbout,
        StateAbout: StateAbout,
    })
};