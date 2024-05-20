import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getDipById } from "../../helpers/getDipById";
import { TableProyectDip } from "../../uiDesing/components/TableProyectDip";

export const DipPage = () => {
  const params = useParams();
  const id = parseInt(params.id!);
  const dip = useMemo(() => getDipById(id), [id]);
  const datadip = dip;
  const comisiones = dip?.Comisiones.split(" ");
  const cantidadComisiones = comisiones?.slice(0, 10);
  if (!dip) {
    return <Navigate to="/" />;
  }
  const dipImg = `/src/assets/diputados-img/${datadip?.id}.png`;
  return (
    <div className="flex flex-col items-center min-h-screen lg:flex-row">
      <div className="mt-4 flex flex-row max-w-[80%] mx-4 lg:h-[430px] lg:my-auto border rounded animate__animated animate__fadeInLeft">
        <img
          src={dipImg}
          alt="diputado-chaqueño"
          className="object-cover w-[50%] rounded-s-sm"
        />
        <section className="w-[50%] flex flex-col m-2 gap-4 items-center text-justify">
          <h5 className="text-base sm:text-lg font-Avenir-Medium">
            {datadip?.Apellido} {datadip?.Nombre}
          </h5>
          <p className="text-xs text-gray-700 sm:text-sm">
            Oficina: {datadip?.Oficina}
          </p>
          <p className="text-xs text-gray-700 sm:text-sm">
            Período: {datadip?.Periodo}
          </p>
          <p className="text-[10px] sm:text-sm text-gray-700 md:text-justify md:mx-4">
            COMISIONES: {cantidadComisiones?.map((com) => com + " ")}...
          </p>

          <Link
            className="w-24 px-5 py-2 m-2 text-sm font-medium text-center text-white rounded-lg shadow-lg md:w-28 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-cyan-500/50"
            to="/"
          >
            Regresar
          </Link>
        </section>
      </div>

      <TableProyectDip />
    </div>
  );
};
