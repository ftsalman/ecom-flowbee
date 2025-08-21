import React from "react";
import { cn } from "../../utils/utils";

export const SectionHeader = ({ header = "Section Title", className }) => {
  return (
    <div className={cn("text-center mb-6", className)}>
      <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
        {header}
      </h2>
      <div className="w-16 h-0.5 bg-yellow-500 mx-auto mt-2"></div>
    </div>
  );
};
