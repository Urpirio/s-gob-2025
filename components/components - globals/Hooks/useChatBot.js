import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

export default function useChatBot() {
  const [Pregunta_Respuestas, setPreguntas_Respuestas] = useState(Array());
  const [ContextoAnterior, setContextoAnterior] = useState(String());
  const [InputChat, setInputChat] = useState();
  const [NumeroPregunta, setNumeroPregunta] = useState(1);

  const PreguntaUsuario = ({ pregunta }) => {
    return <div>{pregunta}</div>;
  };

  const RespuestaAi = ({ Respuesta }) => {
    const Remover = Respuesta.split("").filter((D) => D != "*");
    return <div className="text-sm">{Remover}</div>;
  };

  const EnviarPregunta = ({ Pregunta }) => {
    setInputChat("");
    fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": "AIzaSyA6s6qfy2BecYXWAIj47Ih7bQR7zhX8DaI",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${Pregunta}, trata de que la respuesta sea simple y resumida, 
                  almenos de que la pregunta misma diga que tiene que ser extensa.`,
                },
              ],
            },
          ],
        }),
      }
    )
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        // console.log(Data.candidates[0].content.parts[0].text);
        setPreguntas_Respuestas([
          ...Pregunta_Respuestas,
          {
            pregunta: <PreguntaUsuario pregunta={Pregunta} />,
            respuesta: (
              <RespuestaAi
                Respuesta={Data.candidates[0].content.parts[0].text}
              />
            ),
          },
        ]);
        setContextoAnterior(
          ` Esta fue la pregunta ` +
            Pregunta +
            " y esta la respuesta anterior " +
            Data.candidates[0].content.parts[0].text
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    EnviarPregunta,
    Pregunta_Respuestas,
    InputChat,
    setInputChat,
  };
}
