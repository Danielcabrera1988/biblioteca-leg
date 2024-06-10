import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getDipById } from "../../helpers/getDipById";
import { TableProyectDip } from "../../uiDesing/components/TableProyectDip";
import { Button } from "../../uiDesing";

export const DipPage = () => {
  const params = useParams();
  const id = parseInt(params.id!);
  const dip = useMemo(() => getDipById(id), [id]);
  const datadip = dip;
  const comisiones = dip!.Comisiones!.split(" ");
  const cantidadComisiones = comisiones?.slice(0, 10);
  if (!dip) {
    return <Navigate to="/" />;
  }
  const dipImg = `/assets/diputados-img/${datadip?.id}.png`;
  return (
    <div className="flex flex-col min-h-screen overflow-hidden place-items-center lg:place-items-start w-[95%] mx-auto lg:flex-row">
      <div className="mt-4 lg:mt-[60px] flex flex-row max-w-[80%] mx-4 lg:h-[430px] rounded shadow-lg bg-zinc-50 animate__animated animate__fadeInLeft">
        <img
          src={dipImg}
          alt="diputado-chaqueño"
          className="object-cover w-[50%] rounded-s-sm"
        />
        <section className="w-[50%] flex flex-col m-2 gap-4 items-center text-justify">
          <h5 className="text-base sm:text-lg font-Avenir-Medium">
            {datadip?.apellido} {datadip?.nombre}
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
          <Button url="/" name="Regresar" />
        </section>
      </div>

      <TableProyectDip />
    </div>
  );
};
