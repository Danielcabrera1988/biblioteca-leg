import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const logo = "/src/assets/header-pl.png";

  return (
    <Navbar
      fluid
      className="fixed top-0 z-20 w-full border drop-shadow-xl start-0 rounded-b-xl"
    >
      <Navbar.Brand>
        <img src={logo} className="h-10" alt="Poder-Legislativo-logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          className="px-2 py-1 transition-colors rounded-sm hover:text-white hover:bg-slate-400 active:bg-slate-200 focus:ring focus:bg-slate-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-2 py-1 transition-colors rounded-sm hover:text-white hover:bg-slate-400 active:bg-slate-200 focus:ring focus:bg-slate-200"
          to="/about"
        >
          Nosotros
        </Link>
        <Link
          className="px-2 py-1 transition-colors rounded-sm hover:text-white hover:bg-slate-400 active:bg-slate-200 focus:ring focus:bg-slate-200"
          to="/contact"
        >
          Contacto
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
