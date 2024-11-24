import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_layout from "./Layout/Main_layout";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout></Main_layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const [phones, users] = await Promise.all([
            fetch("http://localhost:7000/phones").then((res) => res.json()),
            fetch("http://localhost:7000/users").then((res) => res.json()),
          ]);
          return { phones, users };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
