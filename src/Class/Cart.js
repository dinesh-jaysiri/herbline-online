export class Cart {
  constructor(productList) {
    this.productList = productList;
    this.getSubTotal = this.getSubTotal.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.getTotalItem = this.getTotalItem.bind(this);
    this.readyToOrder = this.readyToOrder.bind(this);
    this.getShippingCost = this.getShippingCost.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  getProduct() {
    return this.productList.filter((product) => product.quantity > 0);
  }
  getSubTotal() {
    let totalPrice = 0;
    this.getProduct().forEach((product) => {
      totalPrice = totalPrice + product.quantity * product.price;
    });
    return totalPrice;
  }
  getTotalItem() {
    let totlaItem = 0;
    this.getProduct().forEach((product) => {
      totlaItem = totlaItem + product.quantity;
    });

    return totlaItem;
  }
  readyToOrder() {
    if (this.getTotal() > 1250) return true;
    return false;
  }
  getShippingCost() {
    if (this.getTotalItem() <= 0) return 0;
    if (this.getSubTotal() > 4000) return 0;
    return 300;
  }
  getTotal() {
    return this.getShippingCost() + this.getSubTotal();
  }
}
