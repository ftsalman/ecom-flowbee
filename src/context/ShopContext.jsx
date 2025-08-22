import { createContext, useContext, useEffect, useState } from "react";
import { DummyBestSellers, dummyProducts } from "../../public/imgs/grocery/assets";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [products, setProducts] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [cart, setCart] = useState({});         
  const [wishlist, setWishlist] = useState([]); 
  const [searchQuery,setSearchQuery]  =  useState({});

  useEffect(() => {
    setProducts(dummyProducts);

    setBestsellers(DummyBestSellers)
  }, []);




  const addToCart = (productId, quantity = 1) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + quantity }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const value = {
    user, setUser,
    bestsellers, setBestsellers,
    isSeller, setIsSeller,
    products, cart, wishlist,
    addToCart, removeFromCart, toggleWishlist,
    searchQuery,searchQuery
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);

export default ShopContextProvider;
