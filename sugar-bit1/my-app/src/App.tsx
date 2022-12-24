// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Favorites } from './features/main/favorites/Favorites';
// import { Home } from './features/main/home/Home';
// import { InsertValue } from './features/main/values/InsertValue';
// import { Values } from './features/main/values/Values';
// import { Login } from './features/user/login';
// import { Register } from './features/user/register';
import { Favorites } from "./main/favorites/Favorites";
import { Home } from "./main/home/Home";
import { InsertValue } from "./main/values/InsertValue";
import { Values } from "./main/values/Values";
import { Daybook } from "./side/daybook/Daybook";
import { Login } from "./user/login";
import { Register } from "./user/register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Register/>}/>
      {/* <Route path='/login' element={}/> */}
      <Route path='/home' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites />}/>
      <Route path='/values' element={<Values/>} />
      <Route path='/private-value' element={<InsertValue/>}/>
      <Route path="/daybook" element={<Daybook/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;