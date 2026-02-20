import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Layout from "./Layout.jsx";
import Poems from "./Pages/Poems/Poems.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Details from "./Pages/Details/Details.jsx";


const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/poems",
        element: <Poems />
      },
      {
        path: "/poems/:id",
        element: <Details />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }

]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}