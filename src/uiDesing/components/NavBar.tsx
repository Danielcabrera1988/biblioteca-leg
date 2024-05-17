import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const logo = "/src/assets/header-pl.png";

  return (
    <Navbar fluid className="w-full border drop-shadow-xl start-0 rounded-b-xl">
      <Navbar.Brand>
        <img src={logo} className="h-10" alt="Poder-Legislativo-logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          className="w-16 px-2 py-1 transition duration-300 ease-in border-b-2 border-white md:text-center focus:text-cyan-500 hover:text-cyan-500 hover:border-cyan-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="w-20 px-2 py-1 transition duration-300 ease-in border-b-2 border-white md:text-center focus:text-cyan-500 hover:text-cyan-500 hover:border-cyan-500"
          to="/about"
        >
          Nosotros
        </Link>
        <Link
          className="w-20 px-2 py-1 duration-300 ease-in border-b-2 border-white md:text-center ttransition focus:text-cyan-500 hover:text-cyan-500 hover:border-cyan-500"
          to="/contact"
        >
          Contacto
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
