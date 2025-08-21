import React from "react";

export const CategoryItem = ({ label, icon: Icon, isActive, onMouseEnter }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`relative flex items-center gap-2 px-8 py-2 cursor-pointer select-none
        border-l first:border-none border-neutral-700 transition-colors
        ${
          isActive ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
        }`}
    >
      {Icon && <Icon size={20} />}

      <span
        className={`
          text-sm relative
          after:absolute after:left-0 after:right-0 after:-bottom-1
          after:h-[3px] after:rounded-sm
          after:bg-yellow-400
          after:transition-opacity  after:duration-300
          ${
            isActive
              ? "after:opacity-100"
              : "after:opacity-0 group-hover:after:opacity-50"
          }
        `}
      >
        {label}
      </span>
    </div>
  );
};
