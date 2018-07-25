import React from 'react';
import './CheeseCard.css'

export const CheeseCard = (props) => {
  return (
    <article className='CheeseCard' key={props.id}>
      <img className='cheese-image' src={`https://public.opendatasoft.com/explore/dataset/frenchcheese/files/${props.picture}/300/`} />
      <section className='cheese-info'>
        <h2>{props.name}</h2>
        <h3>Milk-Type: {props.milk}</h3>
        <h3>Region: {props.region}</h3>
        <button onClick={() => props.toggleFave(props.id)}>favorite</button>
      </section>
    </article>
    )
}


