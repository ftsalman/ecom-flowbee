import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar/Navbar";
import { Promobar } from "../Components/Promo-bar/Promobar";
import { Categorybar } from "../Components/category-bar/Categorybar";
import { Footer } from "../Components/footer/Footer";

export const HomeLayout = () => {
  return (
    <div className="bg-white h-[100dvh]  flex flex-col">
      {/* Header Sections */}
      <Promobar />
      <Navbar />
      <Categorybar />

      {/* Main Content (scrollable area) */}
      <div className="flex-grow w-full max-w-[100vw] overflow-y-auto overflow-x-hidden panel-scrollbar bg-[#F9F9F9]">
        <Outlet />

        {/* Footer always stays at bottom */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};
