import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { About, Contact, DipPage, Home } from "../diputados/pages";
import LoaderSendForm from "../uiDesing/components/LoaderSendForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dipPage/:id",
        element: <DipPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "loader",
        element: <LoaderSendForm />,
      },
    ],
  },
]);
