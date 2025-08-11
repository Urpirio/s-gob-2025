"use client";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { DataDropDownPuntoGob } from "../../Data/DataDropDown - PGob";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function FormPart2({
  DropdownPGob,
  setDropdownPGob,
  DropdownTramite,
  setDropdownTramite,
}) {
  const [HoraCita, setHoraCita] = useState();
2
  return (
    <div className="flex flex-col py-10 gap-5 w-1/3 justify-between  min-w-80">
      <div>
        <h3 className="text-2xl font-semibold">Datos del menor</h3>
      </div>
      <div className=" flex items-center gap-5 flex-wrap">
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Nombre</label>
          <InputText
            type="text"
            placeholder="Correo electrónico"
            className="border border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">Apellido</label>
          <InputText
            type="text"
            placeholder="Teléfono"
            className="border w-full border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
      </div>
      <div className="flex w-full gap-5 flex-wrap ">
        <div className="flex flex-col gap-3 w-full min-w-80">
          <label className="text-xl font-semibold">Puntos Gob</label>
          <Dropdown
            placeholder="Selecciona un punto Gob"
            value={DropdownPGob}
            onChange={(e) => setDropdownPGob(e.value)}
            options={DataDropDownPuntoGob}
            optionLabel="PuntoGob"
            panelClassName="[&_li]:hover:border p-1 [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
            className="border w-full border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col gap-3 w-full min-w-80">
          <label className="text-xl font-semibold">Tramite</label>
          <Dropdown
            placeholder="Selecciona el Tramite"
            value={DropdownTramite}
            onChange={(e) => setDropdownTramite(e.value)}
            options={DataDropDownPuntoGob}
            optionLabel="PuntoGob"
            panelClassName="[&_li]:hover:border p-1 [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
            className="border w-full border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
      </div>
      <div className=" flex items-center gap-5 flex-wrap">
        <div className="flex flex-col gap-2 w-full min-w-80">
          <label className="text-xl font-semibold">
            Tiene alguna discapacidad?
          </label>
          <div className="flex ">
            <div className="flex items-center">
              <Checkbox />
              <span>SI</span>
            </div>
            <div className="flex items-center">
              <Checkbox />
              <span>NO</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full min-w-80">
          <label className="text-xl font-semibold">Institucion</label>
          <Dropdown
            placeholder="Selecciona un punto Gob"
            value={DropdownPGob}
            onChange={(e) => setDropdownPGob(e.value)}
            options={DataDropDownPuntoGob}
            optionLabel="PuntoGob"
            panelClassName="[&_li]:hover:border p-1 [&_li]:border-0 [&_li]:border-gray-50 rounded-b-xl bg-gray-50 border-gray-200 shadow-xl [&_li]:hover:border-gray-100 [&_li]:w-full [&_li]:hover:text-blue-500 [&_li]:hover:rounded-sm [&_li]:p-1 [&_li]:my-1 [&_li]:hover:bg-gray-50 [&_li]:transition-all [&_li]:duration-50"
            className="border w-full border-gray-300/20 py-3.5 px-3 rounded-md bg-gray-50"
          />
        </div>
      </div>
      <div className="flex flex-col w-full min-w-80">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label className="text-xl font-semibold">Hora de la cita</label>
          <DateTimePicker
            value={HoraCita}
            onChange={(e) => {
              setHoraCita(e.toString());
            }}
            className="bg-gray-50 rounded-lg text-primary"
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
