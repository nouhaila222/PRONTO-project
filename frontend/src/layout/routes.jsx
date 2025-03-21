import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Acceuil";
import Panier from "../pages/Panier"
import Layout from "../layout/Layout"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/panier",
        element:<Panier/>
      }
    ],
  },
]);

export default router;
