import React from 'react';
import { Link } from 'react-router-dom';
import { addFaveCheese, deleteCheese } from '../actions';
import PropTypes from 'prop-types';


export const CheeseDetails = ({cheeseId, name, milk, region, summary, picture}) => {
  return (
      <div>
        <img className='cheese-image' src={`https://public.opendatasoft.com/explore/dataset/frenchcheese/files/${picture}/300/`} />
        <h2>{name}</h2>
        <h4>{milk}</h4>
        <h4>{region}</h4>
        <h4>{summary}</h4>
        <Link to='/'>back</Link>
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

