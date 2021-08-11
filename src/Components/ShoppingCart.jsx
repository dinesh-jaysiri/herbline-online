import ShoppingCartProduct from "./ShoppingCartProduct";
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/Cart";

const ShoppingCart = ({ showCart, hideCart }) => {
  const updatedCart = useCart();
  return (
    <div className={showCart ? "shopping_cart show" : "shopping_cart"}>
      <button onClick={hideCart} className="close_btn">
        x
      </button>
      <div
        className={
          updatedCart.getTotalItem() === 0
            ? "cart_product_container"
            : "cart_product_container longlist"
        }
      >
        {updatedCart.getProduct().map((product) => (
          <ShoppingCartProduct product={product} />
        ))}
      </div>
      <table className="price_table">
        <tr>
          <td className="text">Sub total:</td>
          <td className="number">{`${updatedCart.getSubTotal()}.00`}</td>
        </tr>
        <tr>
          <td className="text">Shipping*:</td>
          <td className="number">{`${updatedCart.getShippingCost()}.00`}</td>
        </tr>
        <tr>
          <td className="text">Total:</td>
          <td className="number total">{`Rs ${updatedCart.getTotal()}.00`}</td>
        </tr>
      </table>
      <article className="notice">
        *Free Delivery Available for orders over Rs 4000/-
      </article>
      {!updatedCart.readyToOrder() ? (
        <article className="notice">
          *You can Only order over Rs 1250/- orders
        </article>
      ) : null}
      <Link
        to="/check-out"
        className={`btn btn--block order_btn ${
          updatedCart.readyToOrder() ? "active" : ""
        }`}
      >
        Proceed To Checkout
      </Link>
    </div>
  );
};

export default ShoppingCart;
