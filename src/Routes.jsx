import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <NotFound />, // Handle 404 Not Found
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
