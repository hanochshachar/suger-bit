import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from './features/main/favorites/Favorites';
import { Home } from './features/main/home/Home';
import { Values } from './features/main/values/Values';
import { Login } from './features/user/login';
import { Register } from './features/user/register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
