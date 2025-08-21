import React, { useEffect, useState } from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import Button from "../ui/button/Button";
import { IconArrowRight } from "../../assets/icons/InterfaceIcons";

export const ProductSection = () => {
  const [isLoading, setIsLoading] = useState("loading"); // loading, default, error

  const productSections = [
    {
      title: "Everyday Fresh & Clean with Our Products",
      buttonText: "Shop Now",
      image: "/imgs/products/onion.png",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Make your Breakfast Healthy and Easy",
      buttonText: "Shop Now",
      image: "/imgs/products/Milk.png",
      bgColor: " bg-[#c0f1ba]",
    },
    {
      title: "The best Organic Products Online",
      buttonText: "Shop Now",
      image: "/imgs/products/Veg-img.png",
      bgColor: "bg-blue-50",
    },
  ];

  // Simulate loading for demo

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl p-7 bg-gray-100 animate-pulse flex justify-between items-center"
            >
              <div className="flex-1 space-y-3">
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
              <div className="w-28 h-28 bg-gray-300 "></div>
            </div>
          ))}
        </div>
      ) : (
        <List
          uniqueKey="title"
          data={productSections}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          render={(item) => (
            <Card
              className={` relative flex items-center justify-between p-7 rounded-xl ${item.bgColor}`}
            >
              {/* text */}
              <div className="max-w-[60%]">
                <h3 className="text-md font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <Button
                  variant="secondary"
                  size="md"
                  className="bg-yellow-400 text-white hover:bg-yellow-500 transition flex items-center gap-1"
                >
                  {item.buttonText}
                  <IconArrowRight size="18" color="#fff" />
                </Button>
              </div>

              {/* Image */}
              <div className=" absolute right-0 bottom-[-9px] w-36 h-36 flex-shrink-0 flex items-end justify-end">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" object-contain  w-full h-full"
                />
              </div>
            </Card>
          )}
        />
      )}
    </div>
  );
};
