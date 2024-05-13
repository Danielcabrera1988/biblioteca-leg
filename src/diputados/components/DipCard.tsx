import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

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
    <div className="flex flex-col m-2 border-[2px] rounded-lg shadow-xl max-w-80 w-[300px] max-h-[600px] h-[550px]">
      <img className="rounded-t-lg" src={dipImg} alt="diputado-chaco" />
      <div className="flex flex-col h-full gap-2 m-4">
        <h5 className="text-xl font-bold text-gray-800 ">
          {Nombre} {Apellido}
        </h5>
        <p className="text-justify text-gray-600">{bloque}</p>
        <p className="text-justify text-gray-600">{email}</p>
      </div>
      <Button className="m-4" gradientMonochrome="info">
        <Link to={`/dipPage/${id}`}>Más...</Link>
      </Button>
    </div>
  );
};
/* 
<Card className="h-[600px] max-w-sm w-80 mt-2 mb-2" imgSrc={dipImg}>
      <h5 className="text-2xl font-bold text-gray-900 ">
        {Nombre} {Apellido}
      </h5>
      <p className="text-justify text-gray-600">{bloque}</p>
      <p className="text-justify text-gray-600">{email}</p>
      <Button className="" gradientMonochrome="info">
        <Link to={`/dipPage/${id}`}>Más...</Link>
      </Button>
    </Card>
*/
