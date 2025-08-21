import React, { useEffect, useState } from "react";
import { useShopContext } from "../../context/ShopContext";
import { SectionHeader } from "../ui/SectionHeader";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import Button from "../ui/button/Button";
import { IconFavorites, IconStar } from "../../assets/icons/InterfaceIcons";

export const BestProduct = () => {
  // States
  const { bestsellers } = useShopContext();
  const [isLoading, setIsLoading] = useState("loading"); // loading, default, error
  const [favourites, setFavourites] = useState(new Set());

  //useEffect

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const getTagStyles = (tag) => {
    switch (tag) {
      case "New":
        return "bg-yellow-400 text-white";
      case "Hot Seller":
        return "bg-red-500 text-white";
      case "Raw Green":
      case "Top Green":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };
  return (
    <div className="py-7 px-6 md:px-16">
      <div>
        <SectionHeader header="Top Products" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <BestProductSkeleton key={i} />
          ))}
        </div>
      ) : (
        <List
          data={bestsellers}
          uniqueKey="id"
          className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          render={(item) => (
            <Card className="relative  p-4 border-2 border-yellow-100 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className=" flex  items-center justify-between">
                {/* Tag */}
                {item.tag && (
                  <span
                    className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${getTagStyles(
                      item.tag
                    )}`}
                  >
                    {item.tag}
                  </span>
                )}
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => toggleFav(item.id)}
                  className="absolute top-1 right-1 border-none shadow-none   rounded-full p-2"
                >
                  <IconFavorites
                    size={20}
                    className={
                      favourites.has(item.id) ? "text-red-500" : "text-gray-600"
                    }
                  />
                </Button>
              </div>

              <div className="group flex items-center justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 group-hover:scale-110 transition-transform duration-300 object-contain"
                />
              </div>

              <p className="text-xs text-gray-500 mb-1">{item.category}</p>

              <h3 className="text-md font-semibold text-gray-800 truncate mb-1">
                {item.name}
              </h3>

              <p className="text-lg font-semibold text-yellow-400 ">
                ${item.offerPrice}{" "}
                <span className="text-sm text-gray-400 line-through">
                  ${item.price}
                </span>
              </p>

              <div className="flex items-center justify-center mt-2 gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    <IconStar className="w-4 h-4" />
                  </span>
                ))}
              </div>
            </Card>
          )}
        />
      )}
    </div>
  );
};

export const BestProductSkeleton = () => {
  return (
    <Card className="p-4 border-2 border-yellow-100 rounded-2xl shadow-sm space-y-3 animate-pulse">
      <div className="h-28 w-28 bg-gray-200 mx-auto rounded-md" />
      <div className="h-3 w-20 bg-gray-200 rounded mx-auto" />
      <div className="h-4 w-32 bg-gray-200 rounded mx-auto" />
      <div className="h-5 w-24 bg-gray-200 rounded mx-auto" />
      <div className="flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, j) => (
          <div key={j} className="h-3 w-3 bg-gray-200 rounded-full" />
        ))}
      </div>
    </Card>
  );
};
