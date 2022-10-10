import axios from "axios";
import react, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  // FETCH PRODCUTS FUNTIONS
  const [product, setProduct] = useState({
    data: [],
    limit: 30,
    error: "",
    loading: false,
  });

  useEffect(() => {
    setProduct({ loading: true });
    axios
      .get(`https://example-data.draftbit.com/products?_limit=${product.limit}`)
      .then((res) => {
        // setProduct({ data: res.data });
        product.data = res.data;
        setProduct({ data: res.data, loading: false });
        console.log(product.data);
      })
      .catch((err) => setProduct({ error: err }));
  }, []);
console.log(product.error)
  const num = 4;
  const ratingFunction = () => {
    const star = [];
    for (let i = 0; i <= 4; i++) {
      star.push("star");
    }
    return star;
  };
  useEffect(() => {
    ratingFunction();
  }, []);

  return (
    <ProductsContext.Provider value={{ product, ratingFunction }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
