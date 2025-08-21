import React from "react";
import Button from "../ui/button/Button";
import { IconArrowRight } from "../../assets/icons/InterfaceIcons";

export const PromoBanner = () => {
  return (
      <>
      <div className="bg-[url('/images/products/hero-bg.png')] bg-center bg-cover bg-no-repeat bg-gradient-to-b from-[#ffecd2] to-[#fcb69f]  md:max-h-fit h-fit overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8">
        {/* Left Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/imgs/products/Fresh_Drink.png"
            alt="Fresh Milkshake"
            className="h-64 md:h-96 object-contain cursor-pointer transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center  md:text-left px-6 mt-6 md:mt-0">
          <p className="text-green-500 font-semibold text-sm mb-2 tracking-wider">
            COOL & REFRESHING
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-green-950 leading-snug mb-4">
            Delicious Creamy <br />
            <span className="text-green-950 drop-shadow-sm">Milk Shake</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
            Made with fresh ingredients and topped with whipped cream. The
            perfect treat for any time of day!
          </p>
          <div className=" flex items-center justify-center md:items-start md:justify-start">
            <Button
              variant="secondary"
              size="md"
              className="bg-green-600  hover:bg-green-500 text-white px-9 py-4 rounded-xl font-semibold   transition-all duration-300 transform hover:-translate-y-1"
            >
              Order Now{" "}
              <span className="ml-2">
                <IconArrowRight />
              </span>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 hidden md:flex justify-center md:justify-end">
          <img
            src="/imgs/grocery/orange_juice_image.png"
            alt="Another Milkshake View"
            className="h-64 md:h-80 object-contain cursor-pointer opacity-0 md:opacity-100 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};
