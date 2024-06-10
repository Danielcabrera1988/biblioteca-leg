import { NavBar, Footer, FormContact } from "../uiDesing/components";
import { Outlet } from "react-router-dom";
import { About } from "../diputados/pages/About";

export const MainLayout = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 place-items-center">
      <NavBar />
      <About />
      <Outlet />
      <FormContact />
      <Footer />
    </main>
  );
};
