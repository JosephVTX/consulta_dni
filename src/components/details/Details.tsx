import { IDniDetails } from "../../hooks/useApi";

export const Details = ({
  apPrimer,
  apSegundo,
  prenombres,
  estadoCivil,
  direccion,
  ubigeo,
  restriccion,
}: IDniDetails) => {
  return (
    <main>
      <ul className="flex flex-col gap-4 mt-4">
        <li className="text-white font-bold">Nombres: {prenombres}</li>
        <li className="text-white font-bold">
          Apellidos: {apPrimer} {apSegundo}
        </li>
        <li className="text-white font-bold">Estado Civil: {estadoCivil}</li>
        <li className="text-white font-bold">Dirección: {direccion}</li>
        <li className="text-white font-bold">Ubigeo: {ubigeo}</li>
        <li className="text-white font-bold">Restricción: {restriccion}</li>
      </ul>
    </main>
  );
};
