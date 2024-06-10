import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { DipPage, Home } from "../diputados/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      /* {
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
      }, */
    ],
  },
  {
    //Este Layout es para las paginas de los diputados
    path: "dipPage/:id",
    element: <DipPage />,
  },
]);
