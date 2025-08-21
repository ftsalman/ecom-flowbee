import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconClose, IconTicket } from "../../assets/icons/InterfaceIcons";
import Button from "../ui/button/Button";

export const Promobar = () => {
      const promoRef = useRef(null);

  const handleClose = () => {
    if (promoRef.current) {
      promoRef.current.classList.add("opacity-0", "scale-95");

      setTimeout(() => {
        promoRef.current.style.display = "none";
      }, 500);
    }
  };
  return (
    <div
      ref={promoRef}
      className="flex h-[5rem] md:h-[40px] bg-[#030712] text-white justify-between items-center px-4 transition-all duration-500 ease-in-out transform "
    >
      <div className="flex flex-col  md:flex-row md:items-center justify-center gap-2.5 md:gap-1 w-full">
        <span className="flex md:items-center md:justify-center gap-2 text-sm">
          <IconTicket /> 30% off storewide — Limited time!
        </span>
        <Link to="/">
          <Button
            variant="outline"
            className="text-yellow-500  cursor-pointer underline hover:text-yellow-300 px-2 py-0 text-sm h-auto"
          >
            Shop Now <IconArrowRight/>
          </Button>
        </Link>
      </div>

      <Button
        variant="outline"
        onClick={handleClose}
        className="ml-4 cursor-pointer"
      >
        <IconClose size="24" />
      </Button>
    </div>
  );
};
