import { useState } from "react";

//Mini Hook para desplegar el menu movil
export const DeployMenuMovil = () => {
    const [Menu, setMenu] = useState(false);

    const DeployMenu = () => {
       if(Menu){
        setMenu(false);
       }
    }
   
    return ({
        setMenu,
        DeployMenu,
        Menu
    })
};