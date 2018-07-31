import React, { Component } from 'react';
import { CheeseCard } from '../../components/CheeseCard';
import { connect } from 'react-redux';
import { addFaveCheese, deleteCheese } from '../../actions';
import PropTypes from 'prop-types';
import './Favorites.css'


export class Favorites extends Component{

  toggleFave = (id) => {
    if(this.isDuplicate(id)) {
      this.props.deleteCheese(id)
    } else {
      this.props.addFaveCheese(id)
    }
  }

  isDuplicate = (id) => {
    return this.props.favorites.find(favoriteId => favoriteId === id)
  }

  faveCheeses = this.props.favorites.reduce((faveCheeses,favorite) => {
    const allCheese = this.props.cheeses.filter(cheese => {
      return cheese.cheeseId === favorite
    })
    return [...faveCheeses, ...allCheese]
  },[])



  cheeseCards = () => {return this.faveCheeses.map(cheese => {
    return (
      <CheeseCard
        name={cheese.name}
        milk={cheese.milk}
        region={cheese.region}
        id={cheese.cheeseId}
        toggleFave={this.toggleFave}
        picture={cheese.picture}
        favorites={this.props.favorites}
        />
      )
  })
}

  render() {
    return (
      (this.cheeseCards())
      ) 
  }

}

export const mapStateToProps = (state) => ({
  cheeses: state.cheeses,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  deleteCheese: (id) => dispatch(deleteCheese(id)),
  addFaveCheese: (id) => dispatch(addFaveCheese(id))
})

Favorites.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  name: PropTypes.string,
  milk: PropTypes.string,
  region: PropTypes.string,
  favorites: PropTypes.array

}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);