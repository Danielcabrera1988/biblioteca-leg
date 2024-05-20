import React from "react";
import { Spinner } from "flowbite-react";

const LoaderSendForm = () => {
  return (
    <div className="flex flex-col items-center min-h-screen gap-3 mt-10 font-bold font-Avenir-Medium">
      <h2 className="text-sm">Enviando su consulta...</h2>
      <Spinner color="pink" aria-label="Pink spinner example" />
    </div>
  );
};

export default LoaderSendForm;
