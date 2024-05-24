import { useState, FormEvent, useRef } from "react";
import LoaderSendForm from "./LoaderSendForm";
import { useNavigate } from "react-router-dom";

export const FormContact = () => {
  const [submit, setSubmit] = useState(true); //estado que maneja el loading y el redirect de la web junto con el navigate
  const navigate = useNavigate();
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const onSubmite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submit) {
      setSubmit(false);
      setTimeout(() => {
        setSubmit(true);
        form.current.reset();
        navigate("/"); //este navigate es para un futuro por si se reestructura la web
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col my-4 text-center md:flex-row place-items-center animate__animated animate__fadeIn md:my-8 md:place-items-start xl:w-[50%]">
      <section className="flex flex-col place-items-center w-[70%] md:w-[50%] m-4">
        <h1 className="mb-4 text-xl font-bold font-Avenir-Medium">Contacto</h1>
        <h3 className="mb-6 text-base font-semibold text-justify md:m-4 font-Avenir-Medium md:text-lg">
          Su opinion nos interesa y cualquier inquietud no dude en consultarnos,
          responderemos a la brevedad! Estamos a su disposición.
        </h3>
      </section>
      <form
        ref={form}
        className="flex flex-col m-4 gap-3 w-[70%] sm:w-[50%] shadow-sm p-2 bg-gray-200 rounded-md"
        onSubmit={onSubmite}
      >
        <label className="italic text-start font-Calibri">
          Nombre Completo
        </label>
        <input
          className="w-full rounded-md border-slate-200 focus:border-cyan-200"
          type="text"
          required
        />

        <label className="italic text-start font-Calibri">Email</label>
        <input
          className="w-full rounded-md border-slate-200 focus:border-cyan-200"
          type="email"
          placeholder="name@example.com"
          required
        />

        <label className="italic text-start font-Calibri">
          Caja de comentario
        </label>
        <textarea
          className="w-full rounded-md resize-none border-slate-200 focus:border-cyan-200"
          placeholder="Escriba su comentaio"
          rows={4}
          required
        />

        <button
          type="submit"
          className="py-2 mx-auto font-medium text-center text-white rounded-lg shadow-lg w-28 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-cyan-500/50"
        >
          Enviar
        </button>
        {submit ? "" : <LoaderSendForm />}
      </form>
    </div>
  );
};
