const PriceTable = () => {
  return (
    <div className="price_table">
      <div className="form_header">Your order</div>
      <table>
        <tr>
          <th className="text" >Product</th>
          <th className="price">Total</th>
        </tr>
        <tr>
          <td className="product_name_container" >
            <article className="product_name text">
              Pimple Control Scrubbing Mud Pack - 120 Ml - P M P
            </article>
            × 1
          </td>
          <td className="price" >Rs 499.00</td>
        </tr>
        <tr>
          <td  className="text" >Cart Subtotal</td>
          <td className="price" >Rs 499.00</td>
        </tr>
        <tr>
          <td className="text" >Shipping</td>
          <td className="price">Rs 0.00</td>
        </tr>
        <tr>
          <td className="text">Order Total</td>
          <td className="price total">Rs 499.00</td>
        </tr>
      </table>
    </div>
  );
};

export default PriceTable;
