import Pop_Up_CambiarContrasena, { DeployPop_Up_CambiarContrasena } from "../../SubComponents/Pop-Up-CambiarContrasena";

export default function SectionPerfil() {
  return (
    <section className="flex flex-wrap justify-center pb-10 gap-5">
        <div className="flex flex-col w-[45%] min-w-90 md:min-w-100  px-10 py-5 gap-4">
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl">Nombres</label>
                <input type="text" placeholder="John Doe" className="p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0" disabled />
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl">Correo electronico</label>
                <input type="text" placeholder="johndoe@gmail.com" className="p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0" disabled/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl">Cedula</label>
                <input type="text" placeholder="000-0000000-0" className="p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0" disabled/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl">Direccion</label>
                <input type="text" placeholder="Calle ej. #1, Provincia, Pais. " className="p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0" disabled/>
            </div>
        </div>
        <div className="flex flex-col w-[45%] min-w-90  px-10 py-5 gap-4">
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl">Apellidos</label>
                <input type="text" placeholder="Genez Suarez" className="p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0" disabled/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl">Telefono</label>
                <input type="text" placeholder="000-000-0000" className="p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0" disabled  />
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-xl">Sexo</label>
                <input type="text" placeholder="Female/Male" className="p-3  border border-gray-100 bg-[#f8f9fa] rounded-md outline-0" disabled/>
            </div>
            <div className="flex justify-between items-end flex-grow">
                <button 
                onClick={()=>DeployPop_Up_CambiarContrasena(true)}
                className="px-5 bg-primary rounded-md p-2 text-white cursor-pointer hover:opacity-80 transition-all duration-300">Cambiar contraseña</button>
                <button 
                disabled
                className="px-5 bg-primary rounded-md p-2 text-white cursor-pointer hover:opacity-80 transition-all duration-300 disabled:opacity-40 disabled:cursor-no-drop">Confirmar cambios</button>
            </div>
        </div>
        <Pop_Up_CambiarContrasena/>
    </section>

  )
};
