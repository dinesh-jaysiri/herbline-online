import React, { useReducer, useContext, createContext } from "react";
import image from "../Images/skinCare/image.jpg";

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const productStateContext = createContext();
const productDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
    const [Cartstate, Cartdispatch] = useReducer(reducer, [
    new Product(1,"product1", 435, image),
    new Product(2,"product2",335, image),
    new Product(3,"product3",235, image),
  ]);

  return (
    <CartDispatchContext.Provider value={Cartdispatch}>
      <CartStateContext.Provider value={Cartstate}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
