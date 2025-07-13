import { DataSearh } from "../data/DataSearch";
import { RiSearchLine } from "react-icons/ri";

export const OptionSearh = ({InputValue,BtnOptions}) => {
    const Options = DataSearh.map((D)=>{
        if(D.Contenido?.toUpperCase().includes(InputValue?.toUpperCase()) && InputValue != D?.Contenido){
            return <button key={D.Contenido} onClick={()=>BtnOptions({Contenido:D.Contenido})} 
                        className="flex items-center p-2 gap-2 text-gray-400 cursor-pointer hover:text-primary hover:bg-gray-50 rounded-xl transition-all duration-200">
                        <RiSearchLine/>
                        <span className="font-light">{D.Contenido}</span>
                    </button>
        }
    });
    
    return(Options);
};