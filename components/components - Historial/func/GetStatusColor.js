import { IoSyncSharp } from "react-icons/io5";
import { FaCheck, FaXmark } from "react-icons/fa6";



//  un boolean todo
export const getStatusColor = (status) => {
  switch (status) {
    case 'Activa':
      return {
        color: 'bg-blue-100 text-[12px]  bg-blue-200 text-blue-800',
        icon: <IoSyncSharp className="w-[14px] h-[14px]" />,
      };
    case 'Fallido':
      return {
        color: 'bg-red-100 text-red-800',
        icon: <FaXmark className="w-[14px] h-[14px]" />,
      };
    case 'Procesado':
      return {
        color: 'bg-green-100 text-green-800',
        icon: <FaCheck className="w-[14px] h-[14px]" />,
      };
    default:
      return {
        color: 'bg-gray-100 text-gray-800',
        icon: null,
      };
  }
};