import React from "react";
import { IconChevronLeft, IconChevronRight } from "../../assets/icons/InterfaceIcons";
import { cn } from "../../utils/utils";



// Utility to generate dynamic pagination numbers
const getPaginationRange = (currPage, totalPages) => {
  const range = [];
  const delta = 2;

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) range.push(i);
  } else {
    const left = Math.max(2, currPage - delta);
    const right = Math.min(totalPages - 1, currPage + delta);

    range.push(1);
    if (left > 2) range.push("...");
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages - 1) range.push("...");
    range.push(totalPages);
  }

  return range;
};
export const Pagenation = ({
     currPage = 1,
  totalPages = 12,
  onPrev = () => {},
  onNext = () => {},
  onPageChange = () => {},
}) => {
      const pages = getPaginationRange(currPage, totalPages);

  return (
     <div className="flex items-center justify-center space-x-2 mt-10">
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={currPage === 1}
        className="w-8 h-8 cursor-pointer rounded text-xl flex items-center justify-center disabled:opacity-50"
      >
        <IconChevronLeft size="24" color="#" />
      </button>

      {/* Page buttons */}
      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "w-8 h-8 rounded cursor-pointer text-sm flex items-center justify-center",
              currPage === page
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-200"
            )}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={onNext}
        disabled={currPage === totalPages}
        className="w-8 h-8 rounded cursor-pointer text-xl flex items-center justify-center disabled:opacity-50"
      >
        <IconChevronRight size="24" />
      </button>
    </div>
  );
};
