"use client";
import { InputText } from "primereact/inputtext";
import useChatBot from "../Hooks/useChatBot";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { IoCopyOutline } from "react-icons/io5";
import { RiSpeakAiLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Skeleton } from "@mui/material";

export let DeployChatBotContainer;
export default function ChatBotContainer() {
  const { EnviarPregunta, Pregunta_Respuestas, InputChat, setInputChat,PreguntaSave,StatusLoading } =
    useChatBot();
  const [StatusDialog, setStatusDialog] = useState(false);
  DeployChatBotContainer = setStatusDialog;

  const CopiarTexto = async ({ respuesta }) => {
    try {
      await navigator.clipboard.writeText(respuesta.props.Respuesta);
    } catch {
      console.log("No se pudo copiar el texto");
    }
  };

  const Lectortexto = ({ Texto }) => {
    const Lector = window.speechSynthesis;
    const Respuesta = new SpeechSynthesisUtterance(Texto.props.Respuesta);
    Respuesta.voice = speechSynthesis.getVoices()[0];
    Respuesta.lang = "es-ES";
    Respuesta.pitch = "1";
    Respuesta.volume = "1";
    Respuesta.rate = "1";
    Lector.speak(Respuesta);
  };

  return (
    <Dialog
      visible={StatusDialog}
      onHide={() => setStatusDialog(false)}
      closeIcon={true}
      blockScroll
      maskClassName="backdrop-blur-md"
      className="border border-blue-100  md:w-[60%] w-[96%] h-full md:h-[90%] rounded-2xl shadow-xl shadow-blue-500/10"
    >
      <section className="flex h-full flex-col  bg-white/95 rounded-2xl">
        <div className="py-6 flex items-center justify-between px-6 ">
          <h2 className="text-center text-3xl text-primary/70 font-bold">
            GOB Agente
          </h2>
          <button
            onClick={() => setStatusDialog(false)}
            className="border p-1 rounded-xl px-4 bg-primary text-white  cursor-pointer hover:opacity-75 transition-all duration-200"
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          className="h-[90%] rounded-t-2xl flex flex-col overflow-y-scroll py-2 px-6 gap-3"
          style={{ scrollbarWidth: "none" }}
        >
          {Pregunta_Respuestas?.map((D) => {
            return (
              <div className="flex flex-col w-full gap-3">
                <div className="w-full flex justify-end">
                  <span className="border border-primary/50 shadow-2xl p-2 rounded-l-xl rounded-t-md bg-primary text-white">
                    {D.pregunta}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-800 text-shadow-2xs">
                    {D?.respuesta}
                  </span>
                  <div className="flex gap-2">
                    <button
                      className="border border-gray-100 p-1 rounded-md cursor-pointer hover:scale-110 transition-all duration-200"
                      onClick={() => CopiarTexto({ respuesta: D?.respuesta })}
                    >
                      <IoCopyOutline />
                    </button>
                    <button
                      className="border border-gray-100 p-1 rounded-md cursor-pointer hover:scale-110 transition-all duration-200"
                      onClick={() => Lectortexto({ Texto: D?.respuesta })}
                    >
                      <RiSpeakAiLine />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full flex justify-end">
            <span className="border border-primary/50 shadow-2xl p-2 rounded-l-xl rounded-t-md bg-primary text-white">
              {StatusLoading ? PreguntaSave : InputChat}
            </span>
          </div>
          {StatusLoading ? <Skeleton
            style={{
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            }}
            height={65}
            width={300}
            className="rounded-2xl"
          /> : ''}
        </div>
        <div className=" flex h-[10%] border-x border-b rounded-b-2xl border-gray-100 gap-3 items-end p-2">
          <InputText
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                EnviarPregunta({ Pregunta: InputChat });
              }
            }}
            value={InputChat}
            onChange={(e) => setInputChat(e.target.value)}
            placeholder="Pregunta lo que quieras"
            className="border border-blue-500/20 backdrop-blur-2xl shadow-xl bg-white shadow-gray-300 h-10 w-[90%] rounded-md outline-none p-1 text-gray-700"
          />
          <Button
            className="border-0 h-10 px-5 justify-center shrink rounded-md cursor-pointer shadow-2xl bg-primary text-white hover:opacity-75 transition-all duration-200"
            onClick={() => EnviarPregunta({ Pregunta: InputChat })}
          >
            Preguntar
          </Button>
        </div>
      </section>
    </Dialog>
  );
}
