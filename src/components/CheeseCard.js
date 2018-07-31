import React from 'react';
import './CheeseCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSummary } from '../thunks/fetchSummary';
import PropTypes from 'prop-types';
import cheeseIcon from '../images/milk.svg';

export const CheeseCard = (props) => {
  const makeUrl = () => {
    const id = props.id
    const urlSnippet = props.frenchWiki
    props.handleFetch(id, urlSnippet)
  }

  return (
      <article className='CheeseCard' key={props.id}>
        <div className="overlay">
        <Link className='details-link'to={`/${props.id}`} onClick={() => makeUrl()}>   
        {props.picture.length ? 
          <img className='cheese-image' src={`https://public.opendatasoft.com/explore/dataset/frenchcheese/files/${props.picture}/300/`}/> : 
          <img className='cheese-icon' src={cheeseIcon} />
        }</Link>
        <section className='cheese-info'>
          <Link className='details-link'to={`/${props.id}`} onClick={() => makeUrl()}><h2>{props.name}</h2></Link>
          <button 
          className='fave-button' 
          onClick={() => props.toggleFave(props.id)}>
          {props.favorites.includes(props.id) ? 'Unfavorite' : 'Favorite'}
          </button>
        </section>
        </div>
      </article>
    )
}

CheeseCard.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  name: PropTypes.string,
  milk: PropTypes.string,
  region: PropTypes.string,
  favorites: PropTypes.obj
}
