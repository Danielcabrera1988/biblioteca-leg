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
    <div className="flex flex-col gap-3 m-auto">
      <div className="flex flex-row gap-2 h-[400px] mt-24 mx-3 border rounded-lg shadow-xl animate__animated animate__fadeInLeft">
        <img
          src={dipImg}
          alt="diputado-chaqueño"
          className="object-cover w-[50%] rounded-s-lg "
        />
        <section className="flex flex-col m-2">
          <h5 className="font-Avenir-Medium">
            {datadip?.Apellido} {datadip?.Nombre}
          </h5>
          <p className="text-sm text-gray-700">Oficina: {datadip?.Oficina}</p>
          <p className="text-sm text-gray-700">Período: {datadip?.Periodo}</p>
          <p className="text-xs text-gray-700">
            Comisiones: {datadip?.Comisiones}
          </p>

          <Link
            className="px-5 py-2 m-4 font-medium text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-cyan-500/50"
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
