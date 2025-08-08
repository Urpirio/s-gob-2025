"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { useMapGoogle } from "../hook/useMapGoogle";
import Card_PuntoGob from "../SubComponents/Card-PuntoGob";

export default function Section_MapGoogle() {
  const {
    NivelZoom,
    setNivelZoom,
    setUserLocation,
    UserLocation,
    Marcadores,
    setStatusDialog,
  } = useMapGoogle();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((D) => {
        setUserLocation({
          lat: D.coords.latitude,
          lng: D.coords.longitude,
        });
      });
    };
  }, []);

  return (
    <section
      className={` flex relative  flex-wrap gap-3 items-center justify-center py-3`}
    >
      <div className="md:w-[60%] w-full hidden md:flex  h-120">
        <APIProvider apiKey="AIzaSyBUsVkX1m_0feaWe6aL-rcmx4mySEyuUus">
          <Map
            onDrag={() => {
              setStatusDialog(false);
            }}
            style={{ width: "100%", height: "100%" }}
            mapId={"HYBRID"}
            disableDefaultUI
            zoom={NivelZoom}
            defaultCenter={{ lat: UserLocation?.lat, lng: UserLocation?.lng }}
            onZoomChanged={(e) => setNivelZoom(e.detail.zoom)}
          >
            <Marcadores />
            <AdvancedMarker
              style={{ borderRadius: 20 }}
              position={{ lat: UserLocation?.lat, lng: UserLocation?.lng }}
            >
              <Pin
                borderColor="#007AFF"
                background="#007AFF"
                glyphColor="white"
              ></Pin>
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>

      <div className="h-full w-[30%] min-w-90 md:min-w-125 md:p-5 px-2  ">
        <article className="border border-gray-100/40 bg-white/60 shadow-2xl shadow-gray-300/80 h-full w-full rounded-2xl p-2 backdrop-blur-md ">
          <div className="px-2  flex flex-col gap-2 text-center xl:text-start">
            <h2 className="text-4xl text-primary">Citas en tiempo real</h2>
            <span className="text-xl text-gray-500">56,213</span>
          </div>
          <div style={{scrollbarWidth:'none'}} className="p-2 flex lg:flex-wrap overflow-x-scroll w-full lg:justify-between justify-start gap-2">
            <Card_PuntoGob />
          </div>
        </article>
      </div>
    </section>
  );
}
