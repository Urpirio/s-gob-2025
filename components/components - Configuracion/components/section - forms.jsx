import { Switch } from "@mui/material";


export default function Sectionforms() {
  return (
    <section className="flex justify-center flex-wrap ">
        <form action="" className="flex flex-col gap-5 w-[40%] min-w-80
        [&form>div>input]:h-15
        [&form>div>input]:w-[80%]
        [&form>div>input]:p-5
        [&form>div>input]:text-[18px]
        [&form>div>input]:rounded-md
        [&form>div>input]:bg-[#F3F3F3]
        ">
          <div>
            <h1 className="text-2xl font-semibold">Cambiar contraseña</h1>
          </div>
          <div>
            <input type="text" placeholder="Ingresa la contraseña"/>
          </div>
          <div>
            <input type="text" placeholder="Confirma la contraseña"/>
          </div>
        </form>
        <div className="w-[40%] flex flex-col items-start justify-center min-w-80">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl">Activar ubicacion al usar </h1> <Switch/>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-xl">Verificacion en dos factores</h1> <Switch/>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-xl">Recibir notificaciones por Gmail</h1> <Switch/>
          </div>
        </div>
    </section>
  )
}
