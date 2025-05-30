import { DataBtnSignUPWith } from "../data/DataBtnSignUPWith";


export default function Btn_SignUp_With() {
  const Btns = DataBtnSignUPWith.map(Data =>{
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
