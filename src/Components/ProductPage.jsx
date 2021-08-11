import { useState } from "react";
import { useProduct } from "../Contexts/Product";
import { paginate } from "../utils/paginate";
import PageTitle from "./PageTitle";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;
  const products = useProduct();
  const PageProduct = paginate(products, currentPage, pageSize);
  const handlePageChange = (page) => {
    console.log(page)
    setCurrentPage(page);
  };
  return (
    <div className="container">
      <PageTitle title="Product Page" />
      <div className="product_page_container">
        { PageProduct.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <Pagination
        itemsCount={products.length}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductPage;
