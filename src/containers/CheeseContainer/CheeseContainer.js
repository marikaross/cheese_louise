import React from 'react';
import { CheeseCard } from '../../components/CheeseCard';
import { connect } from 'react-redux';
import { addFaveCheese, deleteCheese } from '../../actions'

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
      name={cheese.name}
      milk={cheese.milk}
      region={cheese.region}
      id={cheese.cheeseId}
      toggleFave={toggleFave}
      isFave={false}
      />
      ); 
  })

  return (
    (cheeseCards)
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