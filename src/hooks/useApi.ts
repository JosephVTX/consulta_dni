import { useEffect, useState } from "react";
import axios from "axios";

export interface IDniDetails {
  apPrimer: string;
  apSegundo: string;
  direccion: string;
  estadoCivil: string;
  foto: string;
  prenombres: string;
  restriccion: string;
  ubigeo: string;
}
export const useApi = (url: string, dni: number): IDniDetails => {
  const [data, setData] = useState({} as IDniDetails);

  useEffect(() => {
    
    if (!dni) return;

    axios
      .post<any>(url, {
        usuario: Math.random() * 10001,
        app: Math.random() * 101,
        ip: "0.0.0.0",
        dni: dni,
      })
      .then((res) => setData(res.data.consultarResponse.return.datosPersona));
  }, [dni]);

  return data;
};
