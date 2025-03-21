import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Accueil from '../pages/Acceuil'
import Panier from '../pages/Panier'
import React from 'react'

const Router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Accueil />
                },
                {
                    path: "/panier",
                    element: <Panier />
                }
            ]
        }
    ]
);

export default Router