import { DataBtnSignIn } from "../Data/DataBtnSignIn"

export default function BtnSignIn() {
const Btns = DataBtnSignIn .map(Data =>{
    return (
    <button key={Data.key} 
    className="flex
    items-center
    gap-2
    border
    border-gray-300
    p-3
    rounded-md
    flex-grow
    flex-basis-0
    text-gray-600
      ">
        {Data.Icon}
        <span>{Data.Titulo}</span>
    </button>
  )
  })
  return(Btns)
};
