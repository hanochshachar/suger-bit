import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../../style/home.scss';
import { Favorites } from '../favorites/Favorites';
import { Values } from '../values/Values';
import { Navbar } from '../Navbar';

export const Home = () => {
  return (
    <>
    <div className="top">
        <div className="v">v</div>
        <div className="insert"><h1>הזן ערכים</h1></div>
        <div className="x">x</div>
    </div>
    <Navbar/>
    </>
  )
}
