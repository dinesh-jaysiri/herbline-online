import { Product } from "../Class/ShoppingCart";
import PageTitle from "./PageTitle";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";


const ProductPage = () => {
  const products = [];
  
console.log('product page rerenderd')
  return (
    <div className="container">
      <PageTitle title="Product Page" />
      <div className="product_page_container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductPage;
