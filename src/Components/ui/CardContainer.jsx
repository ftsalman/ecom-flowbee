import React from "react";
import { cn } from "../../utils/utils";

export const CardContainer = ({children,className}) => {
  return (
      <div
      className={cn("p-4 items-center gap-3 rounded-xl bg-white", className)}
    >
      {children}
    </div>
  );
};
