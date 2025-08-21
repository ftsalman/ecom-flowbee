import React from "react";
import Button from "../ui/button/Button";

export const NewsLetter = () => {
  return (
       <>
      <div className="w-full bg-transparent px-2 text-center text-black py-20 flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-medium">Get updated</p>
        <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2">
          Never Miss a Deal !
        </h1>
        <p className=" text-sm mt-1 text-gray-400">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
        <div className="flex items-center justify-center mt-10 border border-yellow-400 focus-within:outline focus-within:outline-yellow-200 text-sm rounded-full h-14 max-w-md w-full">
          <input
            type="text"
            className="bg-transparent outline-none rounded-full px-4 h-full flex-1"
            placeholder="Enter your email address"
          />

          <Button
            variant="secondary"
            size="md"
            className="flex items-center justify-center bg-yellow-500 h-11  rounded-full text-white  mr-1 px-8 "
          >
            Subscribe now
          </Button>
        </div>
      </div>
    </>
  );
};
