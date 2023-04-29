import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: []
});

export const ProductsProvider = ({ children }) => {
  const PRODUCTS_DATA = [
    {
      "id": 1,
      "name": "Brown Brim",
      "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "price": 25
    },
    {
      "id": 2,
      "name": "Blue Beanie",
      "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      "price": 18
    }
  ];
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const value = { products };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}