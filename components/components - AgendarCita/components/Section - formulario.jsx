'use client';
import FormPart1 from "../subcomponents/FormPart1";
import FormPart2 from "../subcomponents/FormPart2";
import FormPart3 from "../subcomponents/FormPart3";
import { Albert_Sans } from "next/font/google";
import { useState } from "react";
import { useAuth, useCitas } from "../../../hooks/useApi";

const albert_Sans = Albert_Sans({
  subsets: ['latin-ext']
});

export default function SectionFormulario() {
  const { user, token, isAuthenticated } = useAuth();
  const { crearCita } = useCitas(token);

  const [InputValues, setInputValues] = useState({
    Apellidos: String(),
    Telefono: String(),
    Nombres: String(),
    Correo: String(),
    Cedula: String(),
    Direccion: String(),
  });

  const [selectedInstitucion, setSelectedInstitucion] = useState(null);
  const [selectedServicio, setSelectedServicio] = useState(null);
  const [selectedPuntoGob, setSelectedPuntoGob] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(null);
  const [selectedHora, setSelectedHora] = useState(null);

  const handleConfirmarCita = async () => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para agendar una cita');
      return;
    }

    if (!selectedServicio || !selectedPuntoGob || !selectedFecha || !selectedHora) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const citaData = {
      servicio_id: selectedServicio.id,
      punto_gob_id: selectedPuntoGob.id,
      fecha_cita: selectedFecha,
      hora_cita: selectedHora,
    };

    const resultado = await crearCita(citaData);

    if (resultado.success) {
      alert(`¡Cita agendada exitosamente! Número de cita: ${resultado.data.cita.numero_cita}`);
      // Redirigir o resetear formulario
    } else {
      alert(`Error: ${resultado.error}`);
    }
  };

  return (
    <section className={`flex justify-around md:p-10 py-10 md:py-10 flex-wrap ${albert_Sans.className}`}>
            <FormPart2
            InputValues={InputValues} 
            setInputValues={setInputValues}/>
            <FormPart1 
            InputValues={InputValues} 
            setInputValues={setInputValues}
            selectedInstitucion={selectedInstitucion}
            setSelectedInstitucion={setSelectedInstitucion}
            selectedServicio={selectedServicio}
            setSelectedServicio={setSelectedServicio}
            selectedPuntoGob={selectedPuntoGob}
            setSelectedPuntoGob={setSelectedPuntoGob}
            selectedFecha={selectedFecha}
            setSelectedFecha={setSelectedFecha}
            selectedHora={selectedHora}
            setSelectedHora={setSelectedHora}/>
            <FormPart3 
            InputsForm={InputValues}
            DropdownPGob={selectedPuntoGob?.nombre}
            DropdownTramite={selectedServicio?.nombre}
            onConfirmarCita={handleConfirmarCita}/>
    </section>
  )
};
