const Qty = ({ increaseQuntity, decreseQuantity, quantity}) => {
  return (
    <div className="qty">
      <button onClick={decreseQuantity} className=" btn btn_qty">
        -
      </button>
      <div className="qty_number">{`Quantity: ${quantity}`}</div>
      <button onClick={increaseQuntity} className=" btn btn_qty">
        +
      </button>
    </div>
  );
};

export default Qty;
