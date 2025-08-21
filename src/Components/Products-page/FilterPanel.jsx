import React from "react";
import { cn } from "../../utils/utils";

export const FilterPanel = ({children,className }) => {
  return (
     <div
      className={cn(
        "overflow-y-auto panel-scrollbar mt-0 no-scrollbar",
        "border-r border-l border-gray-200",
        "w-60 flex-shrink-0 sticky top-0 z-40",
        "bg-white",className
      )}
    >
      {children}
    </div>
  );
};
