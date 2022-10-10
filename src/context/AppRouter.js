import React from 'react'
import { Route, Router, Routes } from 'react-router'
import {Home,PageNotFound,Login, Products,FullProduct} from '../components/paths'


function AppRouter() {
  return (
    
        <div>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path='/products' element={<Products/>}/>
            <Route path='/product/:id' element={<FullProduct/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </div>
   
  )
}

export default AppRouter