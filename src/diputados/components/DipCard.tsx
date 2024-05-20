import { Link } from "react-router-dom";
import { Button } from "../../uiDesing";

interface DipMode {
  id: number;
  Nombre: string;
  Apellido: string;
  bloque: string;
  email: string;
}
export const DipCard = ({ id, Nombre, Apellido, bloque, email }: DipMode) => {
  const dipImg = `/src/assets/diputados-img/${id}.png`;

  return (
    <div className="flex items-center flex-col m-2 border shadow-xl rounded-lg max-w-80 w-[300px] max-h-[600px] h-[550px]">
      <img
        className="object-cover w-full rounded-t-lg"
        src={dipImg}
        alt="diputado-chaco"
      />
      <div className="flex flex-col w-full h-full gap-2 p-4">
        <h5 className="text-xl font-bold text-gray-800 ">
          {Nombre} {Apellido}
        </h5>
        <p className="text-justify text-gray-500">{bloque}</p>
        <p className="text-justify text-gray-500">{email}</p>
      </div>

      <Button url={`/dipPage/${id}`} name="Mas..." />
    </div>
  );
};
