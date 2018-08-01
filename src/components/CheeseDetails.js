import React from 'react';
import { Link } from 'react-router-dom';
import { addFaveCheese, deleteCheese } from '../actions';
import PropTypes from 'prop-types';
import './CheeseDetails.css';
import cheeseIcon from '../images/milk.svg'


export const CheeseDetails = ({cheeseId, name, milk, region, summary, picture}) => {
  return (
      <section className='cheese-details'>
        <div className='overlay-cheese'>
          <div className='cheese-pic-div'>
            {picture.length ? 
              <img className='cheese-detail-image' src={`https://public.opendatasoft.com/explore/dataset/frenchcheese/files/${picture}/300/`}/> : 
              <img className='cheese-icon' src={cheeseIcon} />
            }
            </div>
            <div className='cheese-deets'>
              <h2 className="detail-name">{name}</h2>
              <h4 className='details'>{milk}</h4>
              <h4 className="details">region {region}</h4>
              <h4>{summary}</h4>
              <Link className='back' to='/'>back</Link>
            </div>
          </div>
      </section>
    )
}


CheeseDetails.propTypes = {
  name: PropTypes.string,
  milk: PropTypes.string,
  region: PropTypes.string,
  summary: PropTypes.string,
  picture: PropTypes.string
}

