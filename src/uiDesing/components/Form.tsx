import { TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Form = () => {
  /* 
    FALTA
    * post del comentario
    * efecto del envío del comentario
    * mostrar el ok del post
    * redirigir al home
    */

  return (
    <div className="flex flex-col my-4 text-center animate__animated animate__fadeIn">
      <h3 className="mx-4 mb-6 font-Avenir-Medium">
        Su opinion nos interesa y cualquier inquietud no dude en consultarnos,
        responderemos a la brevedad! Estamos a su disposición.
      </h3>
      <p className="ml-4 italic text-start font-Calibri">Nombre Completo</p>
      <TextInput
        className="mb-3 ml-4 max-w-96"
        id="small"
        type="text"
        sizing="sm"
        required
      />
      <p className="ml-4 italic text-start font-Calibri">Correo electrónico</p>
      <TextInput
        className="mb-3 ml-4 max-w-96"
        id="email4"
        type="email"
        rightIcon={HiMail}
        placeholder="name@example.com"
        required
      />
      <p className="ml-4 italic text-start font-Calibri">Caja de comentario</p>
      <Textarea
        className="ml-4 max-w-96"
        id="comment"
        placeholder="deje su comentario..."
        required
        rows={6}
      />
      <Button url="/loader" name="Enviar" />
    </div>
  );
};
