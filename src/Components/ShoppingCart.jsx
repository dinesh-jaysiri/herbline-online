import ShoppingCartProduct from "./ShoppingCartProduct";
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/Cart";

const ShoppingCart = ({ showCart, hideCart }) => {
  const items = useCart();

  return (
    <div className={showCart ? "shopping_cart show": "shopping_cart" }>
      <button onClick={hideCart} className="close_btn">x</button>
      <div className="cart_product_container">{items ? items.map(product =><ShoppingCartProduct key={product.id} product={product} /> ): "cart empty"}
        
      </div>
      <table className="price_table">
        <tr>
          <td className="text">Sub total:</td>
          <td className="number">Rs 1250.00</td>
        </tr>
        <tr>
          <td className="text">Shipping*:</td>
          <td className="number">Rs 300.00</td>
        </tr>
        <tr>
          <td className="text">Total:</td>
          <td className="number total">Rs 1550.00</td>
        </tr>
      </table>
      <article className="notice">
        *Free Delivery Available for orders over Rs 4000/-
      </article>
      <Link to="/check-out" className="btn btn--block order_btn">
        Proceed To Checkout
      </Link>
    </div>
  );
};

export default ShoppingCart;
