import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { ProductCard , Loading , Error} from "../components/paths";

function Products() {
  const Product = useContext(ProductsContext);
  const data = Product.product;
  console.log(Product.product.loading)
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Product.product.loading && <Loading/>}
      {Product.product.error && <Error/>}
      {data.data?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}

export default Products;
