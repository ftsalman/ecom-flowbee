import React from "react";
import { Banner } from "../Components/banner/Banner";
import { Categories } from "../Components/categories/Categories";
import { BestProduct } from "../Components/best-products/BestProduct";
import { ProductSection } from "../Components/product-section/ProductSection";
import { PopularProducts } from "../Components/popular-products/PopularProducts";
import { Service } from "../Components/services-section/Service";
import { PromoBanner } from "../Components/promo-banner/PromoBanner";
import { NewsLetter } from "../Components/news-letter/NewsLetter";
import { Footer } from "../Components/footer/Footer";

export const Homepage = () => {
  return (
    <div className=" overflow-clip space-y-9 ">
      <Banner />
      <Categories />
      <BestProduct />
      <ProductSection />
      <PopularProducts />
      <Service />
      <PromoBanner />
      <NewsLetter />
      <Footer />
    </div>
  );
};
