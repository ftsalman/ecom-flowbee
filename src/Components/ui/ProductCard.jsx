import React from "react";
import { CardContainer } from "./CardContainer";
import { Card } from "./Card";
import { cn } from "../../utils/utils";
import Button from "./button/Button";
import {
  IconFavorites,
  IconShoppingCart,
  IconStar,
} from "../../assets/icons/InterfaceIcons";
import { Link } from "react-router-dom";

export const ProductCard = ({
  data = {},
  loading = false,
  className = "",
  ImageClass,
  toggleFav = () => {},
  favourites = new Set(),
}) => {
  if (loading) return <SkeletonProductCard />;

  const getTagStyles = (tag) => {
    switch (tag) {
      case "new":
        return "bg-green-500 text-white";
      case "out":
        return "bg-red-600 text-white";
      case "sale":
        return "bg-yellow-400 text-white";
      default:
        return "";
    }
  };

  return (
    <CardContainer
      className={cn(
        "h-fit space-y-2 px-4 sm:px-8 md:px-1 bg-transparent",
        className
      )}
    >
      <Card className="space-y-3 p-4 w-[255px] max-w-full h-full">
        <div className="relative flex justify-center items-center p-2 rounded-md border border-gray-200 bg-gray-100 h-40">
          <div>
            {data.status && (
              <span
                className={`absolute top-0 left-0 px-1 py-1 text-white  font-semibold text-xs rounded-r-4xl ${getTagStyles(
                  data.status
                )}`}
              >
                {data.status === "sale"
                  ? `-${data.discount}`
                  : data.status === "new"
                  ? "New"
                  : data.status === "out"
                  ? "Out of Stock"
                  : ""}
              </span>
            )}
            <Button
              variant="secondary"
              size="icon"
              onClick={() => toggleFav(data.id)}
              className="absolute top-0 right-0 bg-transparent shadow-none border-none rounded-full p-1.5"
            >
              <IconFavorites
                size="24"
                className={
                  favourites.has(data.id) ? "text-red-500" : "text-gray-600"
                }
              />
            </Button>
          </div>

          <img
            src={data.image}
            alt={data.name}
            className={cn(
              "w-full h-full hover:scale-110 transition-all duration-300 object-contain",
              ImageClass
            )}
          />
        </div>

        <div>
          <p className="text-xs text-gray-500">{data.category}</p>
          <h2 className="text-gray-900 font-semibold text-sm mt-1 line-clamp-2">
            {data.name}
          </h2>
        </div>

        <div>
          {/* Rating */}
          <div className="flex items-center text-yellow-400 text-xs mb-1">
            {Array.from({ length: 5 }).map((_, index) =>
              index < data.rating ? (
                <IconStar key={index} size="12" fill="currentColor" />
              ) : (
                <IconStar
                  key={index}
                  size="12"
                  fill="none"
                  stroke="currentColor"
                />
              )
            )}
            <span className="text-gray-500 text-xs ml-1">({data.rating})</span>
          </div>

          <p className="text-sm mb-1 font-medium text-gray-950">
            By <span className="text-yellow-500">{data.brand}</span>
          </p>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between gap-1 mt-2">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-sm font-semibold">
                AED{(data.price || 0).toFixed(2)}
              </span>
              {data.oldPrice && (
                <span className="line-through text-gray-400 text-xs">
                  {data.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <Button
              variant="secondary"
              size="sm"
              className="flex items-center  gap-2 bg-yellow-400 hover:bg-yellow-500 px-2 text-white w-full max-w-[]"
              disabled={data.status === "out"}
            >
              <IconShoppingCart size="15" />
              <span className="text-xs max-w-full w-[4rem] ">Add To Cart</span>
            </Button>
          </div>
        </div>
      </Card>
    </CardContainer>
  );
};

export const SkeletonProductCard = () => {
  return (
    <Card className="space-y-3 p-4 w-[255px] max-w-full h-full animate-pulse">
      <div className="h-40 w-full bg-gray-200 rounded-md" />

      <div className="h-3 w-20 bg-gray-200 rounded" />

      <div className="h-4 w-40 bg-gray-200 rounded mt-2" />

      <div className="h-3 w-24 bg-gray-200 rounded mt-2" />

      <div className="h-3 w-32 bg-gray-200 rounded mt-2" />

      <div className="flex items-center justify-between gap-2 mt-4">
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <div className="h-8 w-20 bg-gray-300 rounded" />
      </div>
    </Card>
  );
};
