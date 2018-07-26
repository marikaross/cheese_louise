import React from 'react';
import { CheeseCard } from '../../components/CheeseCard';
import { connect } from 'react-redux';
import { addFaveCheese, deleteCheese } from '../../actions';
import './CheeseContainer.css';

export const CheeseContainer = (props) => {
  const toggleFave = (id) => {
    if(isDuplicate(id)) {
      props.deleteCheese(id)
    } else {
      props.addFaveCheese(id)
    }

  }

  const isDuplicate = (id) => {
    return props.favorites.find(favoriteId => favoriteId === id)
  }


  const cheeseCards = props.cheeses.map(cheese => {
    return (
      <CheeseCard 
      key={cheese.cheeseId}
      name={cheese.name}
      milk={cheese.milk}
      region={cheese.region}
      id={cheese.cheeseId}
      toggleFave={toggleFave}
      isFave={false}
      picture={cheese.picture}
      />
      ); 
  })

  return (
    <div className='cheeseContainer'>
      {cheeseCards}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  cheeses: state.cheeses,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  deleteCheese: (id) => dispatch(deleteCheese(id)),
  addFaveCheese: (id) => dispatch(addFaveCheese(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheeseContainer);