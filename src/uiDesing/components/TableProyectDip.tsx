import { infoLeg } from "../../diputados/data";
export const TableProyectDip = () => {
  return (
    <div className=" lg:m-auto mt-4 animate__animated animate__fadeInRight max-w-[90%] flex flex-col font-Calibri">
      <h2 className="mx-auto mb-4 font-Avenir-Medium animate-bounce lg:text-xl">
        Proyectos recientes
      </h2>
      <table className="h-6 mx-4 border bg-slate-200">
        <thead className="bg-slate-400">
          <tr>
            <th className="p-2 text-xs md:text-[12px] ">Proy/Res</th>
            <th className="p-2 text-xs md:text-[12px]">Fecha</th>
            <th className="p-2 text-xs md:text-[12px]">Breve Descripción</th>
            <th className="p-2 text-xs md:text-[12px]">Estado</th>
          </tr>
        </thead>
        {infoLeg.map((dip) => (
          <tbody key={dip.id}>
            <tr className="border">
              <td className="p-2 text-[10px] md:text-[12px]">{dip.Proyecto}</td>
              <td className="p-2 text-[10px] md:text-[12px]">{dip.Fecha}</td>
              <td className="p-2 text-[9px] md:text-[12px]">
                {dip.Descripcion}
              </td>
              <td className="p-2 text-[10px] md:text-[12px]">{dip.Estado}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
