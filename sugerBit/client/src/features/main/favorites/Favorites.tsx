import React from 'react'
import { Navbar } from '../Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { Values } from '../values/Values';
import '../../../style/favorites.scss'

export const Favorites = () => {
  return (
<>
    <div className="top">
        <div className="v">v</div>
        <div className="insert"><h1>פחמימות</h1></div>
        <div className="x">x</div>
    </div>
    <Navbar/>
    
</>

  )
}
