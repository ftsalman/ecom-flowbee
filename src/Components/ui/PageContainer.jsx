import React from "react";
import { cn } from "../../utils/utils";

export const PageContainer = ({ children, className }) => {
  return (
    <div className={cn("h-full p-4 flex flex-col  bg-inherit", className)}>
      {children}
    </div>
  );
};
