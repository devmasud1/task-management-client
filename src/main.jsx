import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Routes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./hooks/Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);
