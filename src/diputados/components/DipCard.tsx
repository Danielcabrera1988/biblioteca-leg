import { Link } from "react-router-dom";

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
    <div className="flex flex-col   rounded-lg border-gray-100  max-w-80 w-full">
      <img className="rounded-t-lg" src={dipImg} alt="diputado-chaco" />
      <div className="flex flex-col h-full gap-2 m-4">
        <h5 className="text-xl font-bold text-gray-800 ">
          {Nombre} {Apellido}
        </h5>
        <p className="text-justify text-gray-600">{bloque}</p>
        <p className="text-justify text-gray-600">{email}</p>
      </div>

      <Link
        className="px-5 py-2 m-4 font-medium text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-cyan-500/50"
        to={`/dipPage/${id}`}
      >
        Más...
      </Link>
    </div>
  );
};
