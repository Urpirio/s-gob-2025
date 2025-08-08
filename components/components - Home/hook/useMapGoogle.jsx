import { useCallback, useEffect, useState } from "react";
import { DataMarcadores } from "../data/DataMarcadores";
import { Pin, AdvancedMarker } from "@vis.gl/react-google-maps";


import {
  DirectionsService,
  DirectionsRenderer,
  Polyline,
} from "@react-google-maps/api";

export const useMapGoogle = () => {
  const [NivelZoom, setNivelZoom] = useState(12.8);
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

  const Marcadores = () => {
    const Mark = DataMarcadores.map((D) => {
      const [Distancia, setDistancia] = useState(null);
      //Con esto podemos Obtener la distancia entre dos puntos
      var service = new google.maps.DistanceMatrixService();
      //Con esto estamos pidiendo la ubicacion de la persona y luego estamos gestionandola para saber cual es la distancia entre los diferentes puntos
      navigator.geolocation.getCurrentPosition((E) => {
        const Ori2 = new google.maps.LatLng(
          E?.coords?.latitude,
          E?.coords?.longitude
        );

        const Des2 = new google.maps.LatLng(
          D?.localizacion.lat,
          D?.localizacion?.lng
        );

        service.getDistanceMatrix(
          {
            origins: [Ori2],
            destinations: [Des2],
            travelMode: "DRIVING",
          },
          (D) => {
            setDistancia(D.rows[0].elements[0].distance.text);
          }
        );
      });

      return (
        <AdvancedMarker
          onClick={() => {
            setStatusDialog(!StatusDialog);
            setDataDialog(D);
          }}
          position={D?.localizacion}
          title={D?.NombrePg}
        >
          <Pin background={"#0077b6"} borderColor={"#FFFFF"}>
            <div
              onClick={() => setStatusDialog(!StatusDialog)}
              className="border flex  flex-col hover:scale-110 transition-all z-50  border-primary text-primary p-2 w-50 text-center rounded-xl bg-white"
            >
              <span className=" p-2">{D?.NombrePg}</span>
              <span>{Distancia}</span>
            </div>
          </Pin>
          
        </AdvancedMarker>
      );
    });
    return Mark;
  };

  return {
    UserLocation,
    setUserLocation,
    NivelZoom,
    setNivelZoom,
    DataDialog,
    setDataDialog,
    Marcadores,
    StatusDialog,
    setStatusDialog,
  };
};
