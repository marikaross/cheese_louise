import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = () => {

  return(
      <div className='header'>
        <div className='header-link'>
          <NavLink className='logo'to='/'>Cheese-Louise</NavLink>
        </div>
        <div className='faves'>
          <NavLink className='favorites-link' to='/favorites'>Favorites</NavLink>
        </div >
      </div>
    )
}