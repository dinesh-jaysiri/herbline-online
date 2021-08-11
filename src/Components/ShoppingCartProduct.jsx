import { useDispatchProduct } from "../Contexts/Product";


const ShoppingCartProduct = ({ product }) => {
  const dispatch = useDispatchProduct();
  const close = (item) => {
    dispatch({ type: "CLOSE", item });
  };
    return (
      <div className="cart_product">
        <img className="cart_product_image" src={product.image} alt="" />
        <div className="cart_product_ditiles">
          <p className="cart_product_discription">
            {product.name}
          </p>
          <article className="cart_product_price">{`${product.quantity} X Rs ${product.price}.00`}</article>
        </div>
        <button onClick={()=>close(product)} className="close_btn close_btn_round">X</button>
      </div>
    );
}
 
export default ShoppingCartProduct;