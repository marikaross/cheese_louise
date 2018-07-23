import React from 'react';
import { CheeseCard } from '../../components/CheeseCard';
import { connect } from 'react-redux';
import { addFaveCheese, deleteCheese } from '../../actions'

export const CheeseContainer = (props) => {
  const cheeseCards = props.cheeses.map(cheese => {
  console.log(props)
    return (
      <CheeseCard 
      name={cheese.name}
      milk={cheese.milk}
      region={cheese.region}
      id={cheese.cheeseId}
      />
      ); 
  })

  return (
    (cheeseCards)
  )
}

export const mapStateToProps = (state) => ({
  cheeses: state.cheeses
})

export const mapDispatchToProps = (dispatch) => ({
  deleteCheese: (cheeseId) => dispatch(deleteCheese(cheeseId)),
  addFaveCheese: (cheeseId) => dispatch(addFaveCheese(cheeseId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheeseContainer);