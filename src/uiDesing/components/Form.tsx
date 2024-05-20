import { TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
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
    <div className="flex flex-col min-w-full my-4 text-center animate__animated animate__fadeIn">
      <h3 className="mx-4 mb-6 font-Avenir-Medium">
        Su opinion nos interesa y cualquier inquietud no dude en consultarnos,
        responderemos a la brevedad! Estamos a su disposición.
      </h3>
      <p className="mx-4 italic text-start font-Calibri">Nombre Completo</p>
      <TextInput
        className="mx-4 mb-3 max-w-[90%] md:max-w-[50%]"
        id="small"
        type="text"
        sizing="sm"
        required
      />
      <p className="mx-4 italic text-start font-Calibri">Correo electrónico</p>
      <TextInput
        className="mx-4 mb-3 max-w-[90%] md:max-w-[50%]"
        id="email4"
        type="email"
        rightIcon={HiMail}
        placeholder="name@example.com"
        required
      />
      <p className="mx-4 italic text-start font-Calibri">Caja de comentario</p>
      <Textarea
        className="mx-4 max-w-[90%] md:max-w-[50%]"
        placeholder="deje su comentario..."
        required
        rows={6}
      />
      <Button url="/loader" name="Enviar" />
    </div>
  );
};
