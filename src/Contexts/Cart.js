import React, { useContext, createContext } from "react";
import { Cart } from "../Class/Cart";
import { useProduct } from "./Product";

const CartStateContext = createContext();


export const CartProvider = ({ children }) => {
  const updatedCart = new Cart(useProduct());

  return (
      <CartStateContext.Provider value={updatedCart}>
        {children}
      </CartStateContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
