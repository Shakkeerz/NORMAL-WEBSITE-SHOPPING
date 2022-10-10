import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { ProductCard } from "../components/paths";

function Products() {
  const Product = useContext(ProductsContext);
  const data = Product.product;
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.data.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}

export default Products;
