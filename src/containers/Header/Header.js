import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = () => {

  return(
      <div className='header'>
        <NavLink className='header-link' to='/'>Cheese-Louise</NavLink>
        <NavLink className='favorites-link' to='/favorites'>Favorites</NavLink>
      </div>
    )
}