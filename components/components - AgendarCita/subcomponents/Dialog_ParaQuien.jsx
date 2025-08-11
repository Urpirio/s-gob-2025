import Image from "next/image";
import { Dialog } from "primereact/dialog";
import SvgIcon from "@/../public/img - AgendarCita/Featured icon.svg";
import Router from "next/router";

export default function Dialog_ParaQuien({ StatusDialog, setStatusDialog }) {
  return (
    <Dialog
      className="bg-white w-1/4 border border-gray-200 p-5 rounded-xl shadow-xl shadow-gray-400/50"
      blockScroll
      closeIcon={true}
      maskClassName="backdrop-blur-2xl"
      visible={StatusDialog}
      onHide={() => setStatusDialog()}
    >
      <section className="w-full flex flex-col justify-between">
        <div className="">
          <Image src={SvgIcon} alt="SvgIcon" />
        </div>

        <div className="flex flex-col gap-4 py-2">
          <h2 className="font-semibold text-xl">
            Elige para quién deseas agendar una cita
          </h2>
          <p className="font-light">
            En caso de que su cita sea para alguien más, debe completar todos
            los campos con datos de esa persona, y en caso de ser para un menor
            de edad, debe completar el formulario como su representante legal.
          </p>
        </div>

        <div className="w-full flex justify-between">
          <button
            onClick={() => setStatusDialog(false)}
            className="border border-gray-200 py-2 px-5 rounded-xl cursor-pointer hover:opacity-75 transition-all duration-300"
          >
            Otra persona
          </button>
          <button
            onClick={() => Router.push('/')}
            className="border border-gray-200 py-2 px-5 rounded-xl cursor-pointer hover:opacity-75 transition-all duration-300"
          >
            Para un menor
          </button>
          <button
            onClick={() => setStatusDialog(false)}
            className="border border-gray-200 py-2 px-5 rounded-xl cursor-pointer hover:opacity-75 transition-all duration-300"
          >
            Para mi
          </button>
        </div>
      </section>
    </Dialog>
  );
}
