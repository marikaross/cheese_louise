import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFaveCheese, deleteCheese } from '../actions';

export const CheeseDetails = (props) => {
  return (
      <div>
      </div>
    )
}


export const mapStateToProps = (state) => ({
  cheeses:state.cheeses,
  favorites:state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  deleteCheese: (id) => dispatch(deleteCheese(id)),
  addFaveCheese: (id) => dispatch(addFaveCheese(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheeseDetails)