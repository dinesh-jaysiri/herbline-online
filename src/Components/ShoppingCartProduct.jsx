import image from "../Images/skinCare/image.jpg";
const ShoppingCartProduct = ({product}) => {
    return (
      <div className="cart_product">
        <img className="cart_product_image" src={product.image} alt="" />
        <div className="cart_product_ditiles">
          <p className="cart_product_discription">
            {product.name}
          </p>
          <article className="cart_product_price">{`1 X Rs ${product.price}`}</article>
        </div>
        <button className="close_btn close_btn_round">X</button>
      </div>
    );
}
 
export default ShoppingCartProduct;