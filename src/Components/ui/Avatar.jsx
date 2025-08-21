import React from "react";
import { cn } from "../../utils/utils";

export const Avatar = ({
  children,
  className = "",
  loading = true,
  imgUrl = null,
  fallback = "/images/profile-default.png",
}) => {
  return (
    <div
      className={cn(
        `relative size-11 flex items-center justify-center font-semibold flex-shrink-0 rounded-full bg-gray-300`,
        className,
        loading && "animate-pulse bg-gray-300"
      )}
    >
      {!loading && (
        <>
          {imgUrl ? (
            <img
              src={imgUrl}
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.target.src = fallback;
              }}
            />
          ) : (
            children
          )}
        </>
      )}
    </div>
  );
};
