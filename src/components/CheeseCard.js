import React from 'react';
import './CheeseCard.css'

export const CheeseCard = (props) => {

  return (
    <article className='CheeseCard' key={props.id}>
      <img className='cheese-image' src='https://public.opendatasoft.com/explore/dataset/frenchcheese/files/9829fd7240102fb426d65264161a9390/300/' />
      <h2>{props.name}</h2>
      <h3>Milk-Type: {props.milk}</h3>
      <h3>Region: {props.region}</h3>
      <button onClick={() => props.toggleFave(props.id)}>favorite</button>
    </article>
    )
}