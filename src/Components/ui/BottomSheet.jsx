import React, { useRef } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { createPortal } from "react-dom";
import { cn } from "../../utils/utils";
import Button from "./button/Button";
import { IconCross } from "../../assets/icons/InterfaceIcons";

export const BottomSheet = ({
  children,
  isOpen = false,
  onClose,
  isFullScreen = false,
  isHidden = false,
  isOutsideClickable = true,
  isEscEnabled = true,
  backdropClassName = "",
  drawerClassName = "",
  className = "",
}) => {
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  const drawerStyles = {
    default: isFullScreen ? "h-full w-full" : "h-full w-full",
    backDrop: isHidden
      ? "pointer-events-none bg-transparent"
      : "backdrop-filter backdrop-blur-sm bg-gray-800/30",
    content: isHidden && "hidden",
    openAnimation: isOpen ? "slide-up" : "slide-down",
    collapsed: "w-6 h-[300px] border-gray-300",
    innerBody: isHidden ? "opacity-0" : "opacity-100",
  };

  return createPortal(
    <div
      className={cn(
        `panel-scrollbar fixed z-50 inset-0 right-0 pt-4 flex flex-col justify-end items-center ${drawerStyles.backDrop} duration-300`,
        backdropClassName
      )}
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current && isOutsideClickable) {
          onClose?.(e);
        }
      }}
    >
      <div
        className={cn(
          `${drawerStyles[isHidden ? "collapsed" : "default"]} ${
            drawerStyles.openAnimation
          } flex rounded-t-[20px] transition-all duration-300 bg-white border border-gray-100`,
          drawerClassName
        )}
        ref={drawerRef}
      >
        <div
          className={cn(
            `flex-grow flex flex-col justify-between ${drawerStyles.innerBody} transition-all duration-300 rounded-t-[20px] bg-white`,
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  isHidden: PropTypes.bool,
  className: PropTypes.string,
  isFullScreen: PropTypes.bool,
  onClose: PropTypes.func,
  backdropClassName: PropTypes.string,
  drawerClassName: PropTypes.string,
  isOutsideClickable: PropTypes.bool,
  isEscEnabled: PropTypes.bool,
};

export const Footer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "sticky bottom-0 w-full h-[80px] p-4 flex items-center gap-2 border-t border-gray-200 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BottomSheet.Footer = Footer;

// ✅ Header Component
export const Header = ({ className, innerClassName, children, onClose }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full p-4 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 rounded-t-[20px] border-b border-gray-200 bg-white",
        className
      )}
    >
      <div className={cn("flex items-center gap-3 flex-grow", innerClassName)}>
        {children}
      </div>
      {onClose && (
        <Button
          size="md"
          variant="tertiary"
          className="hover:bg-gray-50  transition-colors text-primary-500 w-10 p-2.5 rounded-lg ml-auto"
          onClick={onClose}
        >
          <IconCross size="20" />
        </Button>
      )}
    </div>
  );
};

Header.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
};
BottomSheet.Header = Header;

// ✅ Body Component
export const Body = ({ children, className, innerClass }) => {
  return (
    <div
      className={cn(
        "flex-grow p-4 h-max overflow-auto panel-scrollbar",
        className
      )}
    >
      <div className={innerClass}>{children}</div>
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerClass: PropTypes.string,
};

BottomSheet.Body = Body;
