import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/button/Button";

export const Banner = () => {
  return (
    <section className="bg-[url('/imgs/products/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center">
      <div className="text-center flex items-center flex-col max-w-3xl px-6">
        <p className="text-sm text-red-600 font-semibold tracking-wide uppercase">
          100% Pure & Organic
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-green-900 mt-3">
          Fresh Mango
          <br />
          Juice Just Fruit
        </h1>

        <Link to={"/"}>
          <Button className="bg-[#030712]  text-white cursor-pointer px-10 py-3 rounded-lg shadow-md hover:bg-gray-900 transition mt-6">
            Shopping Now
          </Button>
        </Link>
      </div>
    </section>
  );
};
