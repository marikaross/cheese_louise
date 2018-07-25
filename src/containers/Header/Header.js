import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css'

export const Header = (props) => {

  return(
      <div className='header'>
        <NavLink className='header-link' to='/'>Cheese-Louise</NavLink>
        <NavLink className='header-link' to='/favorites'>Favorites</NavLink>
      </div>
    )
}