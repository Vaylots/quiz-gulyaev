import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Security } from "./Pages/Security";
import { Literacy } from "./Pages/Literacy";
import { Word } from "./Pages/Word";
import { Excel } from "./Pages/Excel";
import { OOP } from "./Pages/OOP";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/security",
    element: <Security />,
  },
  {
    path: "/literacy",
    element: <Literacy />,
  },
  {
    path: "/word",
    element: <Word />,
  },
  {
    path: "/excel",
    element: <Excel />,
  },
  {
    path: "/oop",
    element: <OOP />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
