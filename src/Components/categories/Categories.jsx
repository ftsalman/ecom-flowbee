import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Link } from "react-router-dom";
import { List } from "../ui/List";
import { categories } from "../../../public/imgs/grocery/assets";

export const Categories = ({ data = [], isLoading = false }) => {
  const handleCategoryClick = (categoryText) => {
    navigate(`/home/category/${slugify(categoryText)}`);
    window.scrollTo(0, 0);
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  return (
    <section className="mt-16 px-7">
      <div>
        <SectionHeader header=" Our Categories" />
      </div>

      <div className="px-4">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        ) : (
          <List
            className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
            data={categories}
            uniqueKey="id"
            render={(item) => (
              <Link
                key={item.id}
                className="group cursor-pointer"
                onClick={() => handleCategoryClick(item.text)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleCategoryClick(item.text)
                }
              >
                <div
                  className="group cursor-pointer  py-2 px-2 gap-2 rounded-lg flex flex-col justify-center items-center"
                  style={{ backgroundColor: item.bgColor || "#fef3c7" }}
                >
                  <img
                    src={item.image}
                    alt={item.text}
                    className="group-hover:scale-105 transition max-w-full h-24 object-contain mb-2"
                  />
                  <p className="text-sm font-medium">{item.text}</p>
                </div>
              </Link>
            )}
          />
        )}
      </div>
    </section>
  );
};

// Skeleton loader
const SkeletonCard = () => (
  <div className="flex flex-col border-2  border-gray-200 items-center justify-center gap-3 p-4 rounded-lg bg-gray-50 animate-pulse">
    <div className="w-16 h-16 bg-gray-200 rounded-full" />
    <div className="w-20 h-3 bg-gray-300 rounded" />
  </div>
);
