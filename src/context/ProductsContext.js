import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const fetchData =async()=>{
      setLoading(true)
        await axios.get("https://fakestoreapi.com/products").then(res=>setProducts(res.data))
        setLoading(false)
        
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <ProductsContext.Provider value={{products}}>
    {children}
  </ProductsContext.Provider>
  )
};
