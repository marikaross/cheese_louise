import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {

  return (
    <div className='header'>
      <div className='header-link'>
        <NavLink className='logo'to='/'>Cheese-Louise</NavLink>
      </div>
      <div className='faves'>
        <NavLink className='favorites-link' to='/favorites'>Favorites</NavLink>
      </div >
    </div>
  );
};