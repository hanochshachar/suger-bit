import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from "./main/favorites/Favorites";
import { Home } from "./main/home/Home";
import { InsertValue } from "./main/values/InsertValue";
import { Values } from "./main/values/Values";
import { Edit } from "./side/daybook/edit/Edit";
import { Graf } from "./side/daybook/graf/Graf";
import { HomeDB } from "./side/daybook/homeDB/HomeDB";
import { Reminder } from './side/rest/Reminder';
import { Reports } from './side/rest/Reports';
import { Share } from './side/rest/Share';
import { SugarGauge } from './side/rest/SugarGauge';
import { Tutorials } from './side/rest/Tutorials';
import { Settings } from './side/settings/Settings';
import { Side } from './side/Side';
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
      <Route path="/homeDB" element={<HomeDB/>} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/graf" element={<Graf/>} />
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/reminder' element={<Reminder/>} />
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/share' element={<Share/>}/>
      <Route path='/sugar-gauge' element={<SugarGauge/>}/>
      <Route path='/tutorials' element={<Tutorials/>}/>
      <Route path='/side' element={<Side/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;