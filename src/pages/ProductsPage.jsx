import React, { useEffect, useMemo, useState } from "react";
import { PageContainer } from "../Components/ui/PageContainer";
import { useShopContext } from "../context/ShopContext";
import { FilterPanel } from "../Components/Products-page/FilterPanel";
import { FilterSidebar } from "../Components/Products-page/FilderSidebar/FilterSidebar";
import { BreadCurmbs } from "../Components/ui/BreadCurmbs";
import Button from "../Components/ui/button/Button";
import { IconArrowDown } from "../assets/icons/InterfaceIcons";
import { List } from "../Components/ui/List";
import { ProductCard } from "../Components/ui/ProductCard";

export const ProductsPage = () => {
  const { products = [], searchQuery } = useShopContext();

  // States
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("rating"); // Default sort
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Apply search filter
  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  // Simulate loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Sort products (based on filtered ones)
  const sortedProducts = useMemo(() => {
    if (!filteredProducts.length) return [];

    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const handleSortChange = () => {
    const sortOptions = ["rating", "price-low", "price-high", "name"];
    const currentIndex = sortOptions.indexOf(sortBy);
    const nextIndex = (currentIndex + 1) % sortOptions.length;
    setSortBy(sortOptions[nextIndex]);
  };

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
  };

  const getSortButtonText = () => {
    switch (sortBy) {
      case "rating":
        return "By rating";
      case "price-low":
        return "Price: Low to High";
      case "price-high":
        return "Price: High to Low";
      case "name":
        return "By name";
      default:
        return "Sort by";
    }
  };

  return (
    <PageContainer className="p-0">
      <BreadCurmbs />

      <div className="w-full bg-white flex gap-4 panel-scrollbar overflow-x-hidden">
        {/* Sidebar */}
        <FilterPanel className="max-w-[10.5rem] md:max-w-[40rem]">
          <FilterSidebar
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />
        </FilterPanel>

        {/* Main content */}
        <div className="flex-grow min-w-0 flex flex-col px-3 py-4 panel-scrollbar overflow-y-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            {/* Selected count */}
            <h4 className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-500 font-semibold">
              Selected Products:
              <span className="w-6 h-6 flex items-center text-sm justify-center bg-yellow-400 rounded-full text-white font-semibold">
                {sortedProducts.length}
              </span>
            </h4>

            {/* Sorting button */}
            <Button
              variant="secondary"
              size="md"
              onClick={handleSortChange}
              className="flex items-center gap-2 px-4 md:px-6 py-2 text-sm md:text-base"
            >
              {getSortButtonText()} <IconArrowDown />
            </Button>
          </div>

          {/* Product List */}
          <List
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 w-full px-0 md:px-1"
            uniqueKey="id"
            data={sortedProducts} 
            render={(item) => (
              <ProductCard
                loading={isLoading}
                data={item}
                className="max-w-[11.5rem] md:max-w-3xl"
              />
            )}
          />
        </div>
      </div>
    </PageContainer>
  );
};
