import { useDispatchProduct } from "../Contexts/Product";
import Qty from "./Qty";

const ProductCard = ({ product }) => {
  const dispatch = useDispatchProduct();
  const increaseQuntity = (item) => {
    dispatch({ type: "INCREASE", item });
  };
  const decreseQuantity = (item) => {
    if (item.quantity <= 0) return;
    dispatch({ type: "DECRESE", item });
  };
  return (
    <div className="product_card_base">
      <img className="product_image" src={product.image} alt="" />
      <p className="product_discription">{product.name}</p>
      <div className="product_price">Rs {product.price}.00</div>
      {product.quantity <= 0 ? (
        <button
          onClick={() => increaseQuntity(product)}
          className="btn btn--block"
        >
          Add to Cart
        </button>
      ) : (
        <Qty
          increaseQuntity={() => increaseQuntity(product)}
          decreseQuantity={() => decreseQuantity(product)}
          quantity={product.quantity}
        />
      )}
    </div>
  );
};

export default ProductCard;
