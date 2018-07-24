import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {

  return(
      <div className='header'>
        <NavLink to='/'>Cheese-Louise</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
      </div>
    )
}