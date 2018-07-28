import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFaveCheese, deleteCheese } from '../actions';


export const CheeseDetails = (props) => {
console.log(props)

  return (
      <div>
        <img className='cheese-image' src={`https://public.opendatasoft.com/explore/dataset/frenchcheese/files/${props.picture}/300/`} />
        <h2>{props.name}</h2>
        <h4>{props.milk}</h4>
        <h4>{props.region}</h4>
        <h4>{props.summary}</h4>
        <Link to='/'>back</Link>
      </div>
    )
}


