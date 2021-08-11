import React, { useReducer, useContext, createContext } from "react";
import image from "../Images/skinCare/image.jpg";
import { Product } from "../Class/Product";

const ProductsStateContext = createContext();
const ProductsDispatchContext = createContext();

const product = [
  new Product(
    1,
    "Saffron Natural Fairness Face Wash - 120 Ml - S F W",
    145,
    image
  ),
  new Product(
    2,
    "Saffron Natural Fairness Face Wash - 120 Ml - S F W",
    146,
    image
  ),
  new Product(
    3,
    "Saffron Natural Fairness Face Wash - 120 Ml - S F W",
    147,
    image
  ),
  new Product(
    4,
    "Saffron Natural Fairness Face Wash - 120 Ml - S F W",
    148,
    image
  ),
  new Product(
    5,
    "Saffron Natural Fairness Face Wash - 120 Ml - S F W",
    149,
    image
  ),
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return [...state].map((n) =>
        n.id === action.item.id
          ? {
              ...n,
              quantity: n.quantity + 1,
            }
          : n
      );

    case "DECRESE":
      return [...state].map((n) =>
        n.id === action.item.id
          ? {
              ...n,
              quantity: n.quantity <= 0 ? 0 : n.quantity - 1,
            }
          : n
      );

    case "CLOSE":
      return [...state].map((n) =>
        n.id === action.item.id
          ? {
              ...n,
              quantity: 0,
            }
          : n
      );

    default:
      return [...state];
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [...product]);
  console.log(image)

  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={state}>
        {children}
      </ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};

export const useProduct = () => useContext(ProductsStateContext);
export const useDispatchProduct = () => useContext(ProductsDispatchContext);
