import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IconFavorites,
  IconHamburger,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "../../assets/icons/InterfaceIcons";
import { Searchbar } from "../ui/Searchbar";
import { useShopContext } from "../../context/ShopContext";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [searchValue, setSearchValue] = useState("");


  const { user, setuser, navigate, searchQuery, setSearchQuery } =
    useShopContext();

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-[64px] flex items-center justify-between gap-4">
        {/* Left: Logo + Hamburger (Mobile only) */}
        <div className="flex items-center gap-3">
          <Link to="/home">
            <img
              src="/svgs/brand-logos/logo-flowbee-secondary.svg"
              alt="Flowbee Logo"
              width={130}
              height={36}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center: Search (Desktop only) */}
        <div className="hidden md:block flex-1 max-w-[600px] mx-6">
          <Searchbar
            isSearchExpanded
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder="Search for products..."
            className="px-10 py-2 h-10 border border-[#EFE9FF]  rounded-lg shadow-sm text-sm text-gray-800"
          />
        </div>

        {/* Right: Icons (Desktop only) */}
        <div className="flex items-center gap-5 text-gray-700">
          <Link to="#">
            <IconFavorites size={24} />
          </Link>
          <Link to="/home/cart">
            <IconShoppingCart size={24} />
          </Link>
          <Link to="/home/settings">
            <IconUser size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-gray-50 border-t space-y-4">
          <Searchbar
            isSearchExpanded
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder="Search for products..."
            className="w-full px-10 py-2 border border-[#EFE9FF] rounded-lg shadow-sm text-sm text-gray-800"
          />

          <div className="flex items-center gap-6 text-gray-700">
            <Link to="#">
              <IconFavorites size={24} />
            </Link>
            <Link to="/home/cart">
              <IconShoppingCart size={24} />
            </Link>
            <Link to="/home/settings">
              <IconUser size={24} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
