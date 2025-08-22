import React from "react";
import { useShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { categories } from "../../public/imgs/grocery/assets";

export const CategoriesPage = () => {

     const  {products}  = useShopContext();
     const {category}  = useParams();

    const  SearchCategory = categories.find((item)=> item.path.toLocaleLowerCase() === category)
    const filteredProducts = products.filter((product)=> product.category.toLocaleLowerCase()=== category)

  return (

    <>
     <div>
        Categories 
     </div>
    </>



  );
};
