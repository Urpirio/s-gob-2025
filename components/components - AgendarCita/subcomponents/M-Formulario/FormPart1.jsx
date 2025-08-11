"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { InputText } from "primereact/inputtext";

export default function FormPart1({ InputValues, setInputValues }) {
  return (
    <div className="flex flex-col gap-5 w-1/3  justify-between  min-w-80 pt-5 md:py-0">
      <div>
        <Link href={"/Servicios"} className="flex items-center gap-2 text-2xl ">
          <FaArrowLeft className="text-[#0088FF]" />
          <span className="text-gray-400">Volver</span>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#0088FF]">Agenda tu cita</h1>
        <h3 className="text-2xl font-semibold">
          Datos del representante legal
        </h3>
      </div>

      <div className=" flex items-center gap-5 flex-wrap w-full">
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Nombres</label>
          <InputText
            value={InputValues?.Nombres}
            onChange={(e) =>
              setInputValues({ ...InputValues, Nombres: e.target.value })
            }
            type="text"
            placeholder="Nombres"
            className="border border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Apellidos</label>
          <InputText
            value={InputValues?.Apellidos}
            onChange={(e) =>
              setInputValues({ ...InputValues, Apellidos: e.target.value })
            }
            type="text"
            placeholder="Apellidos"
            className="border w-full border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
      </div>

      <div className=" flex items-center gap-5 flex-wrap">
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Correo electrónico</label>
          <InputText
            value={InputValues?.Correo}
            onChange={(e) =>
              setInputValues({ ...InputValues, Correo: e.target.value })
            }
            type="text"
            placeholder="Correo electrónico"
            className="border border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Teléfono</label>
          <InputText
            value={InputValues?.Telefono}
            onChange={(e) =>
              setInputValues({ ...InputValues, Telefono: e.target.value })
            }
            type="text"
            placeholder="Teléfono"
            className="border w-full border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
      </div>
      <div className=" flex items-center gap-5 flex-wrap">
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Cédula</label>
          <InputText
            value={InputValues?.Cedula}
            onChange={(e) =>
              setInputValues({ ...InputValues, Cedula: e.target.value })
            }
            type="text"
            placeholder="Cédula"
            className="border border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Dirección</label>
          <InputText
            value={InputValues?.Direccion}
            onChange={(e) =>
              setInputValues({ ...InputValues, Direccion: e.target.value })
            }
            type="text"
            placeholder="Dirección"
            className="border w-full border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
}
