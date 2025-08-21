import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import ShopContextProvider from "./context/ShopContext";
export const App = () => {
  return (
    <>
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </>
  );
};
