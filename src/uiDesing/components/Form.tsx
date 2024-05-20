/* import { Button } from "./Button"; */
import { TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { useState, FormEvent } from "react";
import LoaderSendForm from "./LoaderSendForm";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [submit, setSubmit] = useState(true);
  const navigate = useNavigate();

  const onSubmite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submit) {
      setSubmit(false);
      setTimeout(() => {
        setSubmit(true);
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col min-w-full my-4 text-center animate__animated animate__fadeIn">
      <h3 className="mx-4 mb-6 font-Avenir-Medium md:text-lg">
        Su opinion nos interesa y cualquier inquietud no dude en consultarnos,
        responderemos a la brevedad! Estamos a su disposición.
      </h3>
      <form className="flex flex-col gap-3 pl-4" onSubmit={onSubmite}>
        <label className="italic text-start font-Calibri">
          Nombre Completo
        </label>
        <input
          className="max-w-[80%] md:max-w-[70%] lg:max-w-[30%] rounded-md border-slate-400"
          type="text"
          placeholder="Fulanito de Tal"
          required
        />

        <label className="italic text-start font-Calibri">Email</label>
        <input
          className="border-slate-400 rounded-md max-w-[80%] md:max-w-[70%] lg:max-w-[30%]"
          type="email"
          placeholder="name@example.com"
          required
        />

        <label className="italic text-start font-Calibri">
          Caja de comentario
        </label>
        <textarea
          className="border-slate-400 rounded-md max-w-[80%] md:max-w-[70%] lg:max-w-[30%]"
          placeholder="Escriba su comentaio"
          rows={4}
          required
        />

        <button
          type="submit"
          className="py-2 mt-4 font-medium text-center text-white rounded-lg shadow-lg w-28 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-cyan-500/50"
        >
          Enviar
        </button>
      </form>
      {submit ? "" : <LoaderSendForm />}
    </div>
  );
};
