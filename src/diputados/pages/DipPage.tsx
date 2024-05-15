import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getDipById } from "../../helpers/getDipById";
import Skeleton from "../../uiDesing/components/Skeleton";

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
    <div className="flex mt-24 flex-colmx-auto lg:flex-row">
      <div className=" lg:w-[50%] flex flex-row gap-2 h-[400px] mx-3 border rounded-lg shadow-xl animate__animated animate__fadeInLeft">
        <img
          src={dipImg}
          alt="diputado-chaqueño"
          className="object-cover w-[50%] rounded-s-lg"
        />
        <section className="flex flex-col gap-2 m-2 md:place-items-center md:gap-4">
          <h5 className="font-Avenir-Medium">
            {datadip?.Apellido} {datadip?.Nombre}
          </h5>
          <p className="text-sm text-gray-700">Oficina: {datadip?.Oficina}</p>
          <p className="text-sm text-gray-700">Período: {datadip?.Periodo}</p>
          <p className="text-[10px] text-gray-700 md:text-justify md:mx-4">
            COMISIONES: {datadip?.Comisiones}
          </p>

          <Link
            className="px-5 py-2 m-2 font-medium text-center text-white rounded-lg shadow-lg md:w-28 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-cyan-500/50"
            to="/"
          >
            Regresar
          </Link>
        </section>
      </div>
      <Skeleton />
    </div>
  );
};
