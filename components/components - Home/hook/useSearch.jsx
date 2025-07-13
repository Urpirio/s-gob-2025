 import { useState } from "react";
import { useEffect } from "react";

 export const useSearch = () => {
    const [InputSearhValue,setInputSearhValue] = useState();
    const [optionSearh,setOptionSearh] = useState('hidden');

    
    useEffect(()=>{
        if(InputSearhValue){
            setOptionSearh('block')
        }else{
            setOptionSearh('hidden')
        }
    },[InputSearhValue]);


    const BtnOptions = ({Contenido}) =>{
            setInputSearhValue(Contenido);
            setTimeout(()=>{
                setOptionSearh('hidden');
            },100) 
    };

     const ConseguirUbicacion = () =>{
       if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((D)=>{
            console.log(D)
            //Esto esta en proceso
            //aun no se usar la api de google 
        },(D)=>{
            console.log(D)
        });
        
       }
    };



    return({
        InputSearhValue,
        BtnOptions,
        optionSearh,
        setOptionSearh,
        setInputSearhValue,
        ConseguirUbicacion,
    })
 }