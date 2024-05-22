import { Button } from "../../uiDesing";

interface DipMode {
  id: number;
  Nombre: string;
  Apellido: string;
  bloque: string;
  email: string;
}
export const DipCard = ({ id, Nombre, Apellido, bloque, email }: DipMode) => {
  const dipImg = `/assets/diputados-img/${id}.png`;

  return (
    <div className="flex place-content-between flex-col m-2 rounded-lg shadow-md h-[520px] w-[280px] bg-gray-100">
      <img
        className="object-cover rounded-t-lg"
        src={dipImg}
        alt="diputado-chaco"
      />
      <div className="flex flex-col gap-2 p-2">
        <h5 className="text-xl font-bold text-gray-800 font-Avenir-Medium ">
          {Nombre} {Apellido}
        </h5>
        <p className="font-semibold text-justify text-gray-500 font-Calibri">
          {bloque}
        </p>
        <p className="font-semibold text-justify text-gray-500 font-Calibri">
          {email}
        </p>
      </div>
      <Button url={`/dipPage/${id}`} name="Mas..." />
    </div>
  );
};
