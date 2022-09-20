import React, { useContext } from 'react'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { ProductsContext } from '../context/ProductsContext'

function Products() {
let products = useContext(ProductsContext)
console.log(products)
products = products.products

  return (
    <div>
      <div className='flex flex-wrap gap-4 justify-cener items-center mt-10'>
      { Array.from(products).map(product=>{
    
    return (<div>
      <ProductCard product={product}/>
    </div>)
  })}
      </div>

      <Footer/>
    </div>
  )
}

export default Products