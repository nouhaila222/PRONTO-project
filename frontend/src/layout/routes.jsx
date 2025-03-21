import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Acceuil";
import Panier from "../pages/Panier"
import Layout from "../layout/Layout"; // Assure-toi que ce composant inclut Navbar & Footer

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Le Layout inclut Navbar & Footer
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
