import { TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Button } from "flowbite-react";

export const Form = () => {
  /* 
    FALTA
    * post del comentario
    * efecto del envío del comentario
    * mostrar el ok del post
    * redirigir al home
    */
  return (
    <div className="flex flex-col mt-24 text-center animate__animated animate__fadeIn">
      <h3 className="mb-6 ml-4 mr-4 font-medium">
        Su opinion nos interesa y cualquier inquietud no dude en consultarnos,
        responderemos a la brevedad! Estamos a su disposición.
      </h3>
      <p className="ml-4 italic text-start">Nombre Completo</p>
      <TextInput
        className="mb-3 ml-4 max-w-96"
        id="small"
        type="text"
        sizing="sm"
        required
      />
      <p className="ml-4 italic text-start">Correo electrónico</p>
      <TextInput
        className="mb-3 ml-4 max-w-96"
        id="email4"
        type="email"
        rightIcon={HiMail}
        placeholder="name@example.com"
        required
      />
      <p className="ml-4 italic text-start">Caja de comentario</p>
      <Textarea
        className="ml-4 max-w-96"
        id="comment"
        placeholder="deje su comentario..."
        required
        rows={6}
      />
      <Button className="w-20 mt-4 mb-4 ml-4" gradientMonochrome="info">
        Enviar
      </Button>
    </div>
  );
};
