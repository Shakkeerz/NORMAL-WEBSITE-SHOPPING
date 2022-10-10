import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

function Error() {
    const Product = useContext(ProductsContext)

  return (
    <div className='h-screen  flex flex-col items-center mt-40'>
        <div className='font-bold text-4xl text-red-500'>{Product.product.error.message}</div>
        <p>Please Refresh your page</p>
    </div>
  )
}

export default Error