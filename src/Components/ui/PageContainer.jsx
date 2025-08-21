import React from "react";
import { cn } from "../../utils/utils";

export const PageContainer = ({children,className}) => {
  return (
     <div
      className={cn(
        "h-full p-4 flex flex-col gap-4 bg-inherit",
        className
      )}
    >
      {children}
    </div>
  );
};
