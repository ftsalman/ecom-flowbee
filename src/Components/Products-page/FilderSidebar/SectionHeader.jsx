import React from "react";
import { cn } from "../../../utils/utils";
import { IconArrowDown } from "../../../assets/icons/InterfaceIcons";
import Button from "../../ui/button/Button";

export const SectionHeader = ({
  head = "",
  descp = "",
  headClassName = "",
  descpClassName = "",
  onClickDropdown = () => {},
  isOpen = false, 
}) => {
  return (
    <div className="w-full border-b border-gray-200 p-3">
      <Button
        variant="outline"
        onClick={onClickDropdown}
        className="w-full flex justify-between  items-center font-semibold px-0 py-2 rounded-none"
      >
        <span className={cn("text-sm", headClassName)}>{head}</span>
        <span
          className={cn(
            "transition-transform cursor-pointer duration-300",
            isOpen ? "  rotate-180" : "rotate-0"
          )}
        >
          <IconArrowDown size="24" />
        </span>
      </Button>

      {descp && (
        <p
          className={cn(
            "mt-1.5 text-sm text-brand-secondary-400 px-1",
            descpClassName
          )}
        >
          {descp}
        </p>
      )}
    </div>
  );
};
