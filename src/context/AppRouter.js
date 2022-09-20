import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Products from '../pages/Products'

function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/About' element={<About/>} />
            <Route path='*' element={<Error404/>} />
        </Routes>
    </div>
  )
}

export default AppRouter