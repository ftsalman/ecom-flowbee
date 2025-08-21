import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative hidden md:flex flex-col items-center justify-center bg-[#FFBF0F]/90 px-6 py-10 overflow-hidden">
        <img
          src="/svgs/auth/auth-layout-vector.svg"
          alt="Background Vector"
          className="absolute top-0 right-[-2rem] w- h- object-cover opacity-100"
        />

        <img
          src="/svgs/auth/auth-boy-scooter.svg"
          alt="Delivery Guy"
          className="relative z-10 w-[380px] max-w-full"
        />

        {/* content */}
        <div className="relative z-10 text-center px-4 mt-4">
          <h2 className="text-xl font-semibold mb-2">
            🛍️ Delivery Within 30 Minutes
          </h2>
          <p className="text-sm text-gray-800 max-w-md mx-auto">
            Upload your services, products, menus or price list and let
            customers browse & place orders instantly. Perfect for meat shops,
            salons, typing corners & more.
          </p>
        </div>
      </div>

      {/* Right Section - White background with form */}
      <div className="bg-white flex flex-col justify-between py-10 px-6 md:px-12 relative overflow-hidden">
        {/* Right-side Background Shape */}
        <img
          src="/svgs/auth/auth-vector-2.svg"
          alt="Right Background Vector"
          className="absolute bottom-0 w-[30rem] left-[-5rem] opacity- pointer-events-none select-none"
        />
        <div className="flex-grow flex items-center justify-center relative z-20">
          {children}
        </div>

        {/* Optional footer */}
        <div className="pt-1 flex items-center justify-end text-sm text-gray-600 relative z-10">
          <p className=" text-[0.8rem]">© 2024. All Rights Reserved</p>
          {/* <Button
            className="rounded-full border-brand-secondary-800"
            size="md"
            variant="tertiary"
          >
            Support
            <img
              src="/svgs/brand-logos/logo-secondary-sm.svg"
              alt="Support Logo"
              className="w-5 h-5 ml-2"
            />
          </Button> */}
        </div>
      </div>
    </div>
)};
