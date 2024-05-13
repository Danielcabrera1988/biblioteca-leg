import React from "react";
import { NavBar, Footer } from "../uiDesing/components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};
