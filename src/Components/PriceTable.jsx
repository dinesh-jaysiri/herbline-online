import { useCart } from "../Contexts/Cart";

const PriceTable = () => {
  const updatedCart = useCart();
  return (
    <div className="price_table">
      <div className="form_header">Your order</div>
      <table>
        <tr>
          <th className="text">Product</th>
          <th className="price">Total</th>
        </tr>
        {updatedCart.getProduct().map((product) => (
          <tr>
            <td className="product_name_container">
              <article className="product_name text">{product.name}</article>
              {`X ${product.quantity}`}
            </td>
            <td className="price">{`Rs ${
              product.price * product.quantity
            }.00`}</td>
          </tr>
        ))}

        <tr>
          <td className="text">Cart Subtotal</td>
          <td className="price">{`Rs ${updatedCart.getSubTotal()}.00`}</td>
        </tr>
        <tr>
          <td className="text">Shipping</td>
          <td className="price">{`Rs ${updatedCart.getShippingCost()}.00`}</td>
        </tr>
        <tr>
          <td className="text">Order Total</td>
          <td className="price total">{`Rs ${updatedCart.getTotal()}.00`}</td>
        </tr>
      </table>
    </div>
  );
};

export default PriceTable;
