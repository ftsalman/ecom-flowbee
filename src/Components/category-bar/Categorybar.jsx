import React, { useState } from "react";
import { CATEGORIES_DATA } from "../../constants/CategoriesDropdownData";
import { List } from "../ui/List";
import { CategoryItem } from "./CategoryItem";
import { CategoryList } from "./CategoryList";
import { IconHamburger } from "../../assets/icons/InterfaceIcons";

export const Categorybar = () => {
     const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openCategory =
    CATEGORIES_DATA.find((c) => c.label === openDropdown) || null;
  return(
    <nav className="relative z-50 bg-[#1E1E1E] border-t p-1 border-gray-700 text-white">
      {/* ------ Desktop navigation and dropdown wrapper ------ */}
      <div
        className="hidden md:block"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        {/* Top category row */}
        <div className="flex items-center gap-px px-20">
          <List
            data={CATEGORIES_DATA}
            uniqueKey="id"
            render={(item, idx) => (
              <CategoryItem
                key={item.id}
                idx={idx}
                {...item}
                isActive={openDropdown === item.label}
                onMouseEnter={() => setOpenDropdown(item.label)}
              />
            )}
          />
        </div>

        {/* Dropdown panel shown when category is active */}
        {openDropdown && <CategoryList openCategory={openCategory} />}
      </div>

      {/* ------ Mobile bar ------ */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <span className="font-semibold">Shop by Category</span>
        <button
          aria-label="Toggle categories"
          onClick={() => setMobileOpen((p) => !p)}
          className="p-2 rounded-md hover:bg-neutral-800 transition"
        >
          <IconHamburger size="24" />
        </button>
      </div>

      {/* ------ Mobile dropdown list ------ */}
      {mobileOpen && (
        <ul className="md:hidden bg-neutral-900 divide-y divide-neutral-700">
          {CATEGORIES_DATA.map((cat) => (
            <li
              key={cat.id}
              className="px-6 py-3 text-sm hover:bg-neutral-800 active:bg-neutral-700 transition"
            >
              {cat.label}
            </li>
          ))}
        </ul>
      )}
    </nav>

  );
};
