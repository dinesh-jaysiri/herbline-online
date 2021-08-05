import sprite from "../Images/sprite.svg"

const ShoppingCartIcon = ({mouseEnter}) => {
  return (
      <div onMouseEnter={mouseEnter} className="shopping_bag">
      <div className="badge" >
        12
      </div>
      <svg className="icon">
        <use xlinkHref={sprite + "#bag"}></use>
      </svg>
      <article className="price" >Rs 19400.00</article>
    </div>
  );
};

export default ShoppingCartIcon;
