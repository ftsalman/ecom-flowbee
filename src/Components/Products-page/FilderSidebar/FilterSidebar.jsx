import React, { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import PriceRange from "./PriceRange";
import { Brand } from "../brand-slidebar/Brand";
import { BuiltMemory } from "../built-memory/BuiltMemory";

const allBrands = [
  { name: "Apple", count: 110, img: "/images/brands/apple.png" },
  { name: "Samsung", count: 125, img: "/images/brands/samsung.png" },
  { name: "Xiaomi", count: 68, img: "/images/brands/xiaomi.png" },
  { name: "Poco", count: 44, img: "/images/brands/poco.png" },
  { name: "OPPO", count: 36, img: "/images/brands/oppo.png" },
  { name: "Honor", count: 10, img: "/images/brands/honor.png" },
  { name: "Motorola", count: 34, img: "/images/brands/motorola.png" },
  { name: "Nokia", count: 22, img: "/images/brands/nokia.png" },
  { name: "Realme", count: 35, img: "/images/brands/realme.png" },
];

const BUILT_MEMORY = [
  { name: "16GB", count: 65 },
  { name: "32GB", count: 123 },
  { name: "64GB", count: 48 },
  { name: "128GB", count: 50 },
  { name: "256GB", count: 24 },
  { name: "512GB", count: 8 },
];

export const FilterSidebar = ({ onFilterChange }) => {
  const [priceOpen, setPriceOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  const [builtMemoryOpen, setBuiltMemoryOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    onFilterChange?.({
      price: [min, max],
      brands: selectedBrands,
      memory: selectedMemory,
    });
  };

  const handleBrandToggle = (brands) => {
    setSelectedBrands(brands);
    onFilterChange?.({
      price: priceRange,
      brands,
      memory: selectedMemory,
    });
  };

  const handleMemoryToggle = (memory) => {
    setSelectedMemory(memory);
    onFilterChange?.({
      price: priceRange,
      brands: selectedBrands,
      memory,
    });
  };
  //   fliter clear
  // const clearFilters = () => {
  //   setSelectedBrands([]);
  //   setSelectedMemory([]);
  //   setPriceRange([0, 2000]);
  //   onFilterChange?.({
  //     price: [0, 2000],
  //     brands: [],
  //     memory: [],
  //   });
  // };

  return (
    <div className="w-full max-w-[250px]">
      <div className="space-y-2">
        <SectionHeader
          head="Price"
          onClickDropdown={() => setPriceOpen(!priceOpen)}
          isOpen={priceOpen}
        />
        {priceOpen && (
          <div className="px-4">
            <PriceRange onChange={handlePriceChange} />
          </div>
        )}

        <SectionHeader
          head="Brand"
          onClickDropdown={() => setBrandOpen(!brandOpen)}
          isOpen={brandOpen}
        />
        {brandOpen && (
          <Brand
            data={allBrands}
            loading={isLoading}
            onChange={handleBrandToggle}
            selected={selectedBrands}
          />
        )}

        <SectionHeader
          head="Built-in memory"
          onClickDropdown={() => setBuiltMemoryOpen(!builtMemoryOpen)}
          isOpen={builtMemoryOpen}
        />
        {builtMemoryOpen && (
          <BuiltMemory
            data={BUILT_MEMORY}
            loading={isLoading}
            onChange={handleMemoryToggle}
            selected={selectedMemory}
          />
        )}

        <SectionHeader head="Protection class" />
        <SectionHeader head="Screen diagonal" />
        <SectionHeader head="Screen type" />
        <SectionHeader head="Battery capacity" />
      </div>
    </div>
  );
};
