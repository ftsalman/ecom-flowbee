import React from "react";
import { CardContainer } from "./CardContainer";
import { Card } from "./Card";
import { cn } from "../../utils/utils";
import Button from "./button/Button";
import { IconFavorites } from "../../assets/icons/InterfaceIcons";
import { Link } from "react-router-dom";

export const ProductCard = ({
  data = {},
  loading = false,
  className = "",
  ImageClass,
}) => {

      if (loading) return <SkeletonProductCard />;
  return (
    <CardContainer className="h-fit space-y-2 px-4 sm:px-8 md:px-1 bg-transparent">
      <Card
        className={cn(
          "relative w-60 flex flex-col items-center p-4 bg-[#F7F7F7]",
          className
        )}
      >
        <Button
          variant="outline"
          onClick={() => onWishlistClick?.(data)}
          className="absolute cursor-pointer top-0 right-0 text-gray-400 hover:text-red-500"
        >
          <IconFavorites size="24" />
        </Button>

        <Link to={``} className="flex flex-col items-center gap-2 w-full">
          <img
            src={data.img}
            alt={data.label}
            className={cn(
              "w-full h-44 mt-2 mb-2 object-contain hover:scale-105 transition-transform duration-300",
              ImageClass
            )}
            loading="lazy"
          />
        </Link>

        <div className="text-center space-y-1">
          <h5 className="text-sm font-medium line-clamp-2">{data.label}</h5>
          <p className="text-xl font-semibold">
            ${data.price.toLocaleString()}
          </p>
        </div>

        <Button
          size="md"
          className="w-full mt-4 cursor-pointer bg-black text-white hover:bg-gray-800"
          onClick={() => onBuyClick?.(data)}
        >
          Buy Now
        </Button>
      </Card>
    </CardContainer>
  );
};



export const SkeletonProductCard = () => {
  return (
    <CardContainer className="h-fit space-y-4 px-4 sm:px-8 md:px-1">
      <Card className="relative w-60 flex flex-col items-center p-6 bg-[#F7F7F7] animate-pulse space-y-3">
        <div className="absolute top-2 right-0 w-6 h-6 bg-gray-300 rounded-full" />

        <div className="w-full h-44 mt-2 mb-2 bg-gray-200 rounded-md" />

        <div className="text-center space-y-2 w-full">
          <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto" />
          <div className="h-6 bg-gray-400 rounded w-1/2 mx-auto" />
        </div>

        <div className="h-10 bg-gray-300 rounded w-full mt-4" />
      </Card>
    </CardContainer>
  );
};
