import React from "react";
import { cn } from "../../utils/utils";

export const Card = ({
  className = "",
  onClick = () => {},
  children,
  ...rest
}) => {
  return (
    <div
      onClick={onclick}
      className={cn(
        "p-4 rounded-lg shadow-lg shadow-gray-50 border border-gray-200  duration-300 hover:shadow-lg hover:shadow-gray-200 focus:shadow-lg focus:shadow-gray-200 cursor-pointer bg-white",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
