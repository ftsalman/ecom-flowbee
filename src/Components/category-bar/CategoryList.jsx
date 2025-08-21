import React from "react";

export const CategoryList = ({ openCategory }) => {
  if (!openCategory?.subMenu) return null;
  /* dynamic column count */
  const columnCount = openCategory.subMenu.length;
  return (
    <div className="absolute inset-x-0 top-full bg-white mx-24 shadow-lg rounded-b-md overflow-hidden">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0,1fr))` }}
      >
        {openCategory.subMenu.map((sub, i) => (
          <div
            key={i}
            className={`px-8 py-6 border-r last:border-none border-neutral-200
                        ${i % 2 === 0 ? "bg-white" : "bg-[#FFF3D1]"}`}
          >
            <h4 className="font-semibold text-yellow-400 text-sm mb-2">
              {sub.title}
            </h4>

            <ul className="space-y-1">
              {sub.items.map((item, j) => (
                <li
                  key={j}
                  className="text-sm  w-[300px] text-gray-700 hover:text-yellow-500 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
