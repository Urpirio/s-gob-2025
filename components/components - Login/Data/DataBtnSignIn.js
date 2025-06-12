import { FaGoogle } from "react-icons/fa6";
import IconMicuenta from '@/../public/img - Login/unnamed.png';
import Image from "next/image";

export const DataBtnSignIn = [
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
]