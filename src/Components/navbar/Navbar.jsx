import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconFavorites, IconHamburger, IconSearch, IconShoppingCart, IconUser } from "../../assets/icons/InterfaceIcons";
import { Searchbar } from "../ui/Searchbar";

export const Navbar = () => {
      const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 h-[64px] flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/">
          <img
            src="/svgs/brand-logos/logo-flowbee-secondary.svg"
            alt="Flowbee Logo"
            width={130}
            height={36}
            className="object-contain"
          />
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-yellow-500 font-medium">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-500 font-medium">
            All Products
          </Link>
          <Link to="/contact" className="hover:text-yellow-500 font-medium">
            Contact
          </Link>
        </div>

        {/* Right: Search + Icons */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search input */}
          <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products..."
            />
            <IconSearch size="20" />
          </div>

          {/* Icons */}
          <Link to="/favorite">
            <IconFavorites size={24} className="cursor-pointer" />
          </Link>
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <IconShoppingCart size={24} />
              <span className="absolute -top-2 -right-3 text-xs text-white bg-yellow-400 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
          <Link to="/settings">
            <IconUser size={24} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <IconHamburger size={28} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t px-6 py-4 space-y-4">
          <Searchbar
            isSearchExpanded
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder="Search for products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm text-gray-800"
          />

          <div className="flex flex-col gap-4 text-gray-700">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-500">
              All Products
            </Link>
            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>

            <div className="flex items-center gap-6">
              <Link to="/favorites">
                <IconFavorites size={24} />
              </Link>
              <Link to="/cart">
                <IconShoppingCart size={24} />
              </Link>
              <Link to="/settings">
                <IconUser size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
