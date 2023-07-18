import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </Router>
    );
}
