import React from 'react'
import { Route, Router, Routes } from 'react-router'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import Login from '../pages/Login'

function AppRouter() {
  return (
    
        <div>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </div>
   
  )
}

export default AppRouter