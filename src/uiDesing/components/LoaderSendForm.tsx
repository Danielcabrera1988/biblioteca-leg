import { Spinner } from "flowbite-react";

const LoaderSendForm = () => {
  return (
    <div className="flex flex-col items-center min-w-full gap-3 mt-10 font-bold font-Avenir-Medium">
      <h2 className="text-sm">Enviando su consulta...</h2>
      <Spinner color="pink" aria-label="Pink spinner example" />
      <h2 className="text-sm">
        Gracias por comunicarse con el Poder Legislativo, nos cominicaremos a la
        brevedad.
      </h2>
    </div>
  );
};

export default LoaderSendForm;
