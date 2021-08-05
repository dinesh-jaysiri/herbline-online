import { useEffect, useState } from "react";
import { useDispatchCart } from "../Contexts/Cart";
import Qty from "./Qty";

const ProductCard = ({ product }) => {
  const dispatch = useDispatchCart();
  // let [quantity, setQuantity] = useState(0);
  const increaseQuntity = (item) => {
    // quantity = quantity + 1;
    // setQuantity(quantity);
    // dispatch({ type: "ADD", item });
  };
  const decreseQuantity = (item) => {
    // if (quantity <= 0) return;
    // quantity = quantity - 1;
    // setQuantity(quantity);
  };
  console.log('product card renderd',product.price)
  return (
    <div className="product_card_base">
      <img className="product_image" src={product.image} alt="" />
      <p className="product_discription">{product.name}</p>
      <div className="product_price">Rs {product.price}</div>
      {quantity <= 0 ? (
        <button
          onClick={() => product.increase()}
          className="btn btn--block"
        >
          Add to Cart
        </button>
      ) : (
        <Qty
          decreseQuantity={() => decreseQuantity(product)}
          increaseQuntity={() => increaseQuntity(product)}
          quantity={quantity}
        />
      )}
    </div>
  );
};

export default ProductCard;
