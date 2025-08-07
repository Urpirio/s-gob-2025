"use client";
import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export default function Section_MapGoogle() {
  const [NivelZoom, setNivelZoom] = useState(10);
  const [StatusDialog, setStatusDialog] = useState(false);
  const [DataDialog, setDataDialog] = useState({
    NombrePg: String(),
    localizacion: {
      lat: Number(),
      lng: Number(),
    },
  });

  const [UserLocation, setUserLocation] = useState({
    lat: Number(),
    lng: Number(),
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((D) => {
        setUserLocation({
          lat: D.coords.latitude,
          lng: D.coords.longitude,
        });
      });
    }
  },[]);

  const DatosPuntos = [
    {
      NombrePg: "Punto GOB Megacentro",
      localizacion: {
        lat: 18.506456694907435,
        lng: -69.85606654403979,
      },
    },
    {
      NombrePg: "Punto GOB San Cristóbal",
      localizacion: {
        lat: 18.42327811559933,
        lng: -70.0991001512923,
      },
    },
    {
      NombrePg: "Punto GOB Occidental Mall",
      localizacion: {
        lat: 18.485351665435633,
        lng: -70.00003049470853,
      },
    },
    {
      NombrePg: "Punto GOB Sambil",
      localizacion: {
        lat: 18.482522,
        lng: -69.911391,
      },
    },
    {
      NombrePg: "Punto GOB Santiago",
      localizacion: {
        lat: 19.48447232600464,
        lng: -70.70892480353132,
      },
    },
    {
      NombrePg: "Punto GOB Expreso",
      localizacion: {
        lat: 18.481897965924357,
        lng: -69.8457521863564,
      },
    },
  ];

  const Marcadores = () => {
    const Mark = DatosPuntos.map((D) => {
      return (
        <AdvancedMarker
          style={{}}
          onClick={() => {
            setStatusDialog(!StatusDialog);
            setDataDialog(D);
          }}
          position={D?.localizacion}
          title={D?.NombrePg}
        >
          <Pin
            background={"#007AFF"}
            glyphColor={"#FFFFFF"}
            borderColor={"#caf0f8"}
          ></Pin>
        </AdvancedMarker>
      );
    });
    return Mark;
  };

  const DialogManual = () => {
    return (
      <article className="p-2 absolute">
        <div
          className={`${
            StatusDialog ? "flex" : " hidden"
          } z-40  bg-white items-center rounded-2xl p-2 shadow-2xl shadow-gray-700/50 border border-gray-300`}
        >
          <img
            className="h-60 w-60 object-cover rounded-2xl"
            src="https://pgr.gob.do/wp-content/uploads/2022/05/LA2A1422.jpg"
            alt="Prueba"
          />
          <div className="h-60 w-60 text-black flex gap-3 flex-col justify-between pl-2">
            <div>
              <h2 className="text-2xl">{DataDialog?.NombrePg}</h2>
              <p className="text-xs text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet, culpa aliquid. Harum dolorem, aliquid ratione neque,
                dicta corporis a accusamus soluta repudiandae alias reiciendis
                dolores atque, ad est ducimus. Nobis.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <button className="border-0 p-2  rounded-lg bg-primary text-white">
                Agendar cita
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className=" flex relative h-100">
      <APIProvider apiKey="AIzaSyBUsVkX1m_0feaWe6aL-rcmx4mySEyuUus">
        <Map
          onDrag={(D) => {
            setStatusDialog(false);
          }}
        //   controlled
          disableDefaultUI
          mapId="739af084373f96fe"
          zoom={NivelZoom}
          gestureHandling="greedy"
          defaultCenter={{ lat: 18.481897965924357, lng: -69.8457521863564 }}
          onZoomChanged={(e) => setNivelZoom(e.detail.zoom)}
        >
          <Marcadores />
        </Map>
      </APIProvider>
      <DialogManual />
    </section>
  );
}
