import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getDipById } from "../../helpers/getDipById";
import { Card } from "flowbite-react";

export const DipPage = () => {
  const params = useParams();
  const id = parseInt(params.id!);
  const dip = useMemo(() => getDipById(id), [id]);
  const datadip = dip;
  if (!dip) {
    return <Navigate to="/" />;
  }
  const dipImg = `/src/assets/diputados-img/${datadip?.id}.png`;
  return (
    <Card
      className="mt-24 mb-8 ml-6 animate__animated animate__fadeInLeft"
      imgSrc={dipImg}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        {datadip?.Apellido} {datadip?.Nombre}
      </h5>
      <p className="font-normal text-gray-700">Oficina: {datadip?.Oficina}</p>
      <p className="font-normal text-gray-700">Período: {datadip?.Periodo}</p>
      <p className="font-normal text-gray-700">
        Comisiones: {datadip?.Comisiones}
      </p>

      <Link
        className="px-5 py-2 m-4 font-medium text-center text-white rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800"
        to="/"
      >
        Regresar
      </Link>
    </Card>
  );
};
