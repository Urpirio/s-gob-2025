import { useEffect, useState } from "react";

export const useFormulario = () => {
  const [StatusDialogPQuien, setStatusDialogPQuien] = useState(false);
  const [InputValues, setInputValues] = useState({
    Apellidos: String(),
    Telefono: String(),
    Nombres: String(),
    Correo: String(),
    Cedula: Number(),
    Direccion: String(),
  });
  const [] = useState({
    Nombres: String(),
    Apellidos:String(),
    
  });
  const [DropdownPGob, setDropdownPGob] = useState(null);
  const [DropdownTramite, setDropdownTramite] = useState(null);

  useEffect(() => {
    setStatusDialogPQuien(true);
  }, []);

  return {
    StatusDialogPQuien,
    setStatusDialogPQuien,
    InputValues,
    setInputValues,
    DropdownPGob,
    setDropdownPGob,
    DropdownTramite,
    setDropdownTramite,
  };
};
