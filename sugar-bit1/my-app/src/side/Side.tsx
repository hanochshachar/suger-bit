import React from 'react';
import logoSide from '../images/logoSide.png';
import shareBtn from '../images/shareBtn.png';
import { NavbarSide } from './NavbarSide';

export const Side = () => {
  return (
    <div className='allSide'>
      <img src={logoSide} alt="" />
      <NavbarSide/>
      <img className='shareBtn' src={shareBtn} alt="" />
    </div>
  )
}
