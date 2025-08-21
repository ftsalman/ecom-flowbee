import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true); // use boolean instead of string

  const { products } = useShopContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageContainer className="p-0">
      <BreadCurmbs />
      <div className="w-full bg-white flex gap-4  panel-scrollbar overflow-x-hidden">
        <FilterPanel className=" max-w-[10.5rem] md:max-w-[40rem]">
          <FilterSidebar />
        </FilterPanel>

        <div className="flex-grow min-w-0 flex flex-col px-3 py-4 panel-scrollbar overflow-y-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <h4 className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-500 font-semibold">
              Selected Products:
              <span className="text-black font-semibold">
                40 {/* {filteredProducts.length} */}
              </span>
            </h4>

            <Button
              variant="secondary"
              size="md"
              className="flex items-center gap-2 px-4 md:px-6 py-2 text-sm md:text-base"
            >
              By rating <IconArrowDown />
            </Button>
          </div>

          <List
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full px-0 md:px-2"
            uniqueKey="id"
            data={products}
            render={(items) => (
              <>
                <ProductCard
                  loading={isLoading}
                  data={items}
                  className="max-w-[11.5rem] md:max-w-3xl"
                />
              </>
            )}
          />
        </div>
      </div>
    </PageContainer>
  );
};
