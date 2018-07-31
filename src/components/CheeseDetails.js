import React from 'react';
import { Link } from 'react-router-dom';
import { addFaveCheese, deleteCheese } from '../actions';
import PropTypes from 'prop-types';
import './CheeseDetails.css';
import cheeseIcon from '../images/milk.svg'


export const CheeseDetails = ({cheeseId, name, milk, region, summary, picture}) => {

  return (
      <div className='cheese-details'>
      {picture.length ? 
        <img src={`https://public.opendatasoft.com/explore/dataset/frenchcheese/files/${picture}/300/`}/> : 
        <img clasName='cheese-icon' src={cheeseIcon} />
      }
        <div className='cheese-deets'>
          <h2>{name}</h2>
          <h4>{milk}</h4>
          <h4>{region}</h4>
          <h4>{summary}</h4>
          <Link to='/'>back</Link>
        </div>
      </div>
    )
}


CheeseDetails.propTypes = {
  name: PropTypes.string,
  milk: PropTypes.string,
  region: PropTypes.string,
  summary: PropTypes.string,
  picture: PropTypes.string
}

