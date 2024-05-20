import React from "react";
import { NavBar, Footer } from "../uiDesing/components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};
