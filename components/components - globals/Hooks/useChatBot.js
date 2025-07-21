import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

export default function useChatBot() {
  const [Pregunta_Respuestas, setPreguntas_Respuestas] = useState(Array());
  const [ContextoAnterior, setContextoAnterior] = useState(String());
  const [InputChat, setInputChat] = useState();
  const [NumeroPregunta, setNumeroPregunta] = useState(1);

  const GenAi = new GoogleGenAI({
    apiKey: "AIzaSyA6s6qfy2BecYXWAIj47Ih7bQR7zhX8DaI",
  });

  const PreguntaUsuario = ({ pregunta }) => {
    return <div>{pregunta}</div>;
  };

  const RespuestaAi = ({ Respuesta }) => {
    const Remover = Respuesta.split("").filter((D) => D != "*");
    return <div className="text-sm">{Remover}</div>;
  };

  const EnviarPregunta = async ({ Pregunta }) => {
    setInputChat("");
    const respuesta = await GenAi.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
      Eres un agente del gobierno de la republica dominicana, solo puede responder preguntas del pais en cuestion.No debes responder a este texto, solo tienes que responder las preguntas.
      trata al ciudadano de manera eduacada y si te saluda soludalo, en caso de que no te salude solo responde de manera directa y amigable.
      Esta es la Pregunta ${InputChat}
      
      `,
    });

    setPreguntas_Respuestas([
      ...Pregunta_Respuestas,
      {
        pregunta: <PreguntaUsuario pregunta={Pregunta} />,
        respuesta: (
          <RespuestaAi Respuesta={respuesta.text} />
        ),
      },
    ]);
  

  


  };

  return {
    EnviarPregunta,
    Pregunta_Respuestas,
    InputChat,
    setInputChat,
  };
}