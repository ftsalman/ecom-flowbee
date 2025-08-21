import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import Button from "../ui/button/Button";
import { IconFavorites, IconShoppingCart, IconStar } from "../../assets/icons/InterfaceIcons";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Seeds of Change Organic Red Rice",
    category: "Fresh Fruit",
    brand: "NestFood",
    price: 28.85,
    oldPrice: 32.0,
    discount: "13%",
    image: "/imgs/grocery/basmati_rice_image.png",
    rating: 1,
    status: "sale",
  },
  {
    id: 2,
    name: "All Natural Style Chicken Meatballs",
    category: "Fresh Seafood",
    brand: "NestFood",
    price: 23.0,
    oldPrice: 122.0,
    discount: "64%",
    image: "/imgs/grocery/quinoa_image.png",
    rating: 3,
    status: "sale",
  },
  {
    id: 3,
    name: "Angie's Sweet & Salty Kettle Corn",
    category: "Baking material",
    brand: "Country Crock",
    price: 48.85,
    oldPrice: 10.8,
    discount: "8%",
    image: "/imgs/grocery/top_ramen_image.png",
    rating: 4,
    status: "new",
  },
  {
    id: 4,
    name: "Foster Farms Takeout Crispy Classic",
    category: "Baking material",
    brand: "Country Crock",
    price: 17.85,
    oldPrice: 19.0,
    discount: "",
    image: "/imgs/grocery/paneer_image.png",
    rating: 0,
    status: "out",
  },
  {
    id: 5,
    name: "Blue Almonds Lightly Salted Vegetables",
    category: "Fresh Fruit",
    brand: "Country Crock",
    price: 23.85,
    oldPrice: 25.0,
    discount: "",
    image: "/imgs/grocery/orange_juice_image.png",
    rating: 1,
    status: "new",
  },
  {
    id: 6,
    name: "Blue Almonds Lightly Salted Vegetables",
    category: "Fresh Fruit",
    brand: "Country Crock",
    price: 23.85,
    oldPrice: 25.0,
    discount: "60%",
    image: "/imgs/grocery/Fish_image.png",
    rating: 1,
    status: "new",
  },
  {
    id: 5,
    name: "Blue Almonds Lightly Salted Vegetables",
    category: "Fresh Fruit",
    brand: "Country Crock",
    price: 23.85,
    oldPrice: 25.0,
    discount: "",
    image: "/imgs/grocery/orange_juice_image.png",
    rating: 1,
    status: "new",
  },
  {
    id: 5,
    name: "Blue Almonds Lightly Salted Vegetables",
    category: "Fresh Fruit",
    brand: "Country Crock",
    price: 23.85,
    oldPrice: 25.0,
    discount: "",
    image: "/imgs/grocery/orange_juice_image.png",
    rating: 1,
    status: "new",
  },
  {
    id: 5,
    name: "Blue Almonds Lightly Salted Vegetables",
    category: "Fresh Fruit",
    brand: "Country Crock",
    price: 23.85,
    oldPrice: 25.0,
    discount: "",
    image: "/imgs/grocery/orange_juice_image.png",
    rating: 1,
    status: "new",
  },
  {
    id: 5,
    name: "Blue Almonds Lightly Salted Vegetables",
    category: "Fresh Fruit",
    brand: "Country Crock",
    price: 23.85,
    oldPrice: 25.0,
    discount: "",
    image: "/imgs/grocery/orange_juice_image.png",
    rating: 1,
    status: "out",
  },
];

const CARD_WIDTH = 236;
const CARD_GAP = 16;
const VISIBLE = 2;

export const PopularProducts = () => {
  // States
  const [page, setPage] = useState(0);
  const [popularData, setPopularData] = useState(DUMMY_PRODUCTS);
  const [isLoading, setIsLoading] = useState("loading"); // loading, default, error
  const [favourites, setFavourites] = useState(new Set());

  // Ref
  const trackRef = useRef(null);

  const pages = Math.ceil(popularData.length / VISIBLE);

  // Scroll to page function (moved outside useEffect)
  const scrollToPage = (pageIndex) => {
    const el = trackRef.current;
    if (!el) return;

    const scrollAmount = pageIndex * (CARD_WIDTH + CARD_GAP) * VISIBLE;
    el.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setPage(pageIndex);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollPos = el.scrollLeft;
      const pageWidth = (CARD_WIDTH + CARD_GAP) * VISIBLE;
      const index = Math.round(scrollPos / pageWidth);

      if (index !== page && index >= 0 && index < pages) {
        setPage(index);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [page, pages]);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="px-6 md:px-12 py-10">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <SectionHeader header="Top Saller Of Month" />
      </div>

      {pages > 1 && (
        <div className="flex justify-end gap-2 mb-4">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className="relative cursor-pointer h-4 w-4"
              aria-label={`Go to page ${i + 1}`}
            >
              <span
                className={`absolute top-0 left-0 h-4 w-4 rounded-full border transition ${
                  page === i ? "border-black" : "border-gray-300"
                }`}
              />
              <span
                className={`absolute top-1 left-1 h-2 w-2 rounded-full transition ${
                  page === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Products List */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-4 pr-4">
          {isLoading ? (
            <div className="flex gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <PopularSkeleton key={i} />
              ))}
            </div>
          ) : (
            <List
              className="flex gap-4"
              data={popularData}
              uniqueKey="id"
              render={(item) => (
                <div
                  className="snap-start"
                  style={{ minWidth: `${CARD_WIDTH}px` }}
                >
                  <Card className="space-y-3 p-4 w-[255px] max-w-full h-full">
                    <div className="relative flex justify-center items-center p-2 rounded-md border border-gray-200 bg-gray-100 h-40">
                      <div>
                        {item.status && (
                          <span
                            className={`absolute top-0 left-0 px-1 py-1 text-white  font-semibold text-xs rounded-r-4xl ${getTagStyles(
                              item.status
                            )}`}
                          >
                            {item.status === "sale"
                              ? `-${item.discount}`
                              : item.status === "new"
                              ? "New"
                              : item.status === "out"
                              ? "Out of Stock"
                              : ""}
                          </span>
                        )}
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => toggleFav(item.id)}
                          className="absolute top-0 right-0 bg-transparent shadow-none border-none rounded-full p-1.5"
                        >
                          <IconFavorites
                            size="24"
                            className={
                              favourites.has(item.id)
                                ? "text-red-500"
                                : "text-gray-600"
                            }
                          />
                        </Button>
                      </div>

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full hover:scale-110 transition-all duration-300 object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">{item.category}</p>
                      <h2 className="text-gray-900 font-semibold text-sm mt-1 line-clamp-2">
                        {item.name}
                      </h2>
                    </div>

                    <div>
                      {/* Rating */}
                      <div className="flex items-center text-yellow-400 text-xs mb-1">
                        {Array.from({ length: 5 }).map((_, index) =>
                          index < item.rating ? (
                            <IconStar
                              key={index}
                              size="12"
                              fill="currentColor"
                            />
                          ) : (
                            <IconStar
                              key={index}
                              size="12"
                              fill="none"
                              stroke="currentColor"
                            />
                          )
                        )}
                        <span className="text-gray-500 text-xs ml-1">
                          ({item.rating})
                        </span>
                      </div>

                      <p className="text-sm mb-1 font-medium text-gray-950">
                        By <span className="text-yellow-500">{item.brand}</span>
                      </p>

                      {/* Price and Add to Cart */}
                      <div className="flex items-center justify-between gap-1 mt-2">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm font-semibold">
                            AED{item.price.toFixed(2)}
                          </span>
                          {item.oldPrice && (
                            <span className="line-through text-gray-400 text-xs">
                              AED{item.oldPrice.toFixed(2)}
                            </span>
                          )}
                        </div>

                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-2 text-white w-full"
                          disabled={item.status === "out"}
                        >
                          <IconShoppingCart size="10" />
                          <span className="text-xs  max-w-full w-[4rem] ">
                            Add To Cart
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const PopularSkeleton = () => {
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
