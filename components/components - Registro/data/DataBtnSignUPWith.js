import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import IconMicuenta from '@/../public/img - Registro/unnamed.png'

export const DataBtnSignUPWith = [
    {
        key: 1,
        Icon: <FaGoogle className="text-[#007AFF]"/>,
        Titulo: 'Registrate con Google',
    },
    {
        key: 1,
        Icon: <Image src={IconMicuenta} alt=""/>,
        Titulo: 'Registrate con Soy yo RD!',
    }
];