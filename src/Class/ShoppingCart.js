export default class ShoppingCartItem {
  constructor(product) {
    this.productId = Product.id;
    this.productPrice = product.price;
    this.productImage = product.image;
    this.productNmae = product.name;
    this.quantity = 1;
  }

    decrease() {
        this.quantity = this.quantity <= 0 ? 0: this.quantity - 1;
    }
    increase() {
        this.quantity = this.quantity + this.quantity;
    }
}

export class Product {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.quantity = 1;
  }
  decrease() {
    this.quantity = this.quantity <= 0 ? 0 : this.quantity - 1;
  }
  increase() {
    this.quantity = this.quantity + this.quantity;
  }
}
