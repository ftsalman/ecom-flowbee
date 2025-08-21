import React from "react";

export const BreadCurmbs = () => {
  return (
    <div 
   className="bg-[#FFD833] border-b border-gray-300 py-4 px-4 sm:px-10 text-sm text-gray-800"
      aria-label="Breadcrumb"
    
    >
         <div className="flex items-center space-x-1 overflow-x-auto">

        
            <button type="button" aria-label="Home">
                 <a href="#">Home</a>
            </button>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1"/>
            </svg>
            <a href="#">E-Commerce</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1"/>
            </svg>
            <a href="#">Product</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1"/>
            </svg>
            <a href="#" className="text-white">Earphones</a>
        </div>

         </div>
   
  );
};
