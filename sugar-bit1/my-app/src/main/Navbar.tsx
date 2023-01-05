import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.scss'

export const Navbar = () => {
  return (
    <div className='link'>
        <Link className='homeButton nav' to='/home'>בית</Link>
        <Link className='favoritesButton nav' to='/favorites'>מועדפים</Link>
        <Link className='valuesButton nav' to='/values'>ערכים</Link>
    </div>
  )
}
