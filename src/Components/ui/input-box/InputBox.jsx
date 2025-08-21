import React from "react";

export const InputBox = ({
  className = "",
  size = "md",
  variant = "secondary",
  ...props
}) => {
  return (
    <input
      type="text"
      className={cn(inputboxVariants({ size, variant, className }))}
      {...props}
    />
  );
};
