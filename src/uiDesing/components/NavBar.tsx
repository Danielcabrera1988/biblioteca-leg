import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const logo = "/assets/header-pl.png";

  return (
    <Navbar fluid className="min-w-full drop-shadow-md rounded-b-xl">
      <Link to="/">
        <img src={logo} className="h-10" alt="Poder-Legislativo-logo" />
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          className="w-16 px-2 py-1 transition duration-300 ease-in-out border-b-2 border-white md:border-b-2 hover:bg-transparent md:text-center focus:text-cyan-500 hover:text-cyan-500 hover:border-cyan-500"
          to="/"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="w-20 px-2 py-1 transition duration-300 ease-in-out border-b-2 border-white md:border-b-2 hover:bg-transparent md:text-center focus:text-cyan-500 hover:text-cyan-500 hover:border-cyan-500"
          to="/"
        >
          Enlace
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="w-20 px-2 py-1 transition duration-300 ease-in-out border-b-2 border-white md:border-b-2 hover:bg-transparent md:text-center focus:text-cyan-500 hover:text-cyan-500 hover:border-cyan-500"
          to="/"
        >
          Enlace
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
