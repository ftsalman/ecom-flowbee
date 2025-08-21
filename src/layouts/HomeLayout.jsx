import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar/Navbar";
import { Promobar } from "../Components/Promo-bar/Promobar";
import { Categorybar } from "../Components/category-bar/Categorybar";

export const HomeLayout = () => {
  return (
    <div className="bg-white overflow-clip h-[100dvh] flex flex-col ">
      <Promobar />
      <Navbar />
      <Categorybar />

      <div className=" w-full  max-w-[100vw] overflow-auto overflow-x-hidden panel-scrollbar flex-grow h-[calc(100dvh-9.75rem)] md:h-[calc(100dvh-5.1rem)] duration-300  bg-[#F9F9F9]">
        <Outlet />
      </div>
      {/* Optional: Footer if needed */}
      {/* <Footer /> */}
    </div>
  )
};
