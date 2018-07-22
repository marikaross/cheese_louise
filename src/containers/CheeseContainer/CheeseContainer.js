import React from 'react';
import CheeseCard from '../../components/CheeseCard';

export const CheeseContainer = (props) => {

  
  const card = props.cheeses.map(cheese => 
  return (
    <CheeseCard 
      name={cheese}
      milkType={milk}
      region={id}
      key={recordid}
      isFavorite={isFavorite(cheese.recordid)}
    />
    )
} 
  )