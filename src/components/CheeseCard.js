import React from 'react';
import './CheeseCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSummary } from '../thunks/fetchSummary';
import PropTypes from 'prop-types';


export const CheeseCard = (props) => {

  const makeUrl = () => {
    const id = props.id
    const urlSnippet = props.frenchWiki
    props.handleFetch(id, urlSnippet)
  }

  return (
    <article className='CheeseCard' key={props.id}>
      <img className='cheese-image' src={`https://public.opendatasoft.com/explore/dataset/frenchcheese/files/${props.picture}/300/`} />
      <section className='cheese-info'>
        <h2>{props.name}</h2>
        <button onClick={() => props.toggleFave(props.id)}>favorite</button>
        <Link className='details-link'to={`/${props.id}`} onClick={() => makeUrl()}>See more info</Link>
      </section>
    </article>
    )
}

CheeseCard.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  name: PropTypes.string,
  milk: PropTypes.string,
  region: PropTypes.string
}
