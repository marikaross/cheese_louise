import React from 'react';

export const CheeseCard = (props) => {

  return (
    <article className='CheeseCard' key={props.id}>
      <h2>{props.name}</h2>
      <h3>Milk-Type: {props.milk}</h3>
      <h3>Region: {props.region}</h3>
      <button onClick={() => props.toggleFave(props.id)}>favorite</button>
    </article>
    )
}