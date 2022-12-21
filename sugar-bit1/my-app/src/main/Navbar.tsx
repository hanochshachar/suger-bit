import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='link'>
        <Link className='homeButton' to='/home'>בית</Link>
        <Link className='favoritesButton' to='/favorites'>מועדפים</Link>
        <Link className='valuesButton' to='/values'>ערכים</Link>
    </div>
  )
}
