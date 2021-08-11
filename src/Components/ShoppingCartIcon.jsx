import { useCart } from "../Contexts/Cart";
import sprite from "../Images/sprite.svg";



const ShoppingCartIcon = ({ mouseEnter }) => {
  const updatedCart = useCart();
  return (
      <div onMouseEnter={mouseEnter} className="shopping_bag">
      <div className="badge" >{updatedCart.getTotalItem()}
      </div>
      <svg className="icon">
        <use xlinkHref={sprite + "#bag"}></use>
      </svg>
      <article className="price" >{`Rs ${updatedCart.getTotal()}.00`}</article>
    </div>
  );
};

export default ShoppingCartIcon;
