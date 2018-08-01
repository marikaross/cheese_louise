import React, { Component } from 'react';
import { CheeseCard } from '../../components/CheeseCard';
import { connect } from 'react-redux';
import { addFaveCheese, deleteCheese } from '../../actions';
import PropTypes from 'prop-types';
import { fetchSummary } from '../../thunks/fetchSummary';
import sadCheese from '../../images/sad-cheese.jpg'


export class Favorites extends Component{

  toggleFave = (id) => {
    if (this.isDuplicate(id)) {
      this.props.deleteCheese(id);
    } else {
      this.props.addFaveCheese(id);
    }
  }

  isDuplicate = (id) => {
    return this.props.favorites.find(favoriteId => favoriteId === id);
  }

  faveCheeses = this.props.favorites.reduce((faveCheeses, favorite) => {
    const allCheese = this.props.cheeses.filter(cheese => {
      return cheese.cheeseId === favorite;
    });
    return [...faveCheeses, ...allCheese];
  }, [])

  handleFetch = async (id, urlSnippet) => {
    const url = `https://fr.wikipedia.org/w/api.php?action=opensearch&search=${urlSnippet}&limit=2&format=json`;
    await this.props.fetchSummary(url, id);
  }

  cheeseCards = () => {
    return this.faveCheeses.map(cheese => {
      return (
        <CheeseCard classname='CheeseCard'
          key={cheese.cheeseId}
          name={cheese.name}
          milk={cheese.milk}
          region={cheese.region}
          id={cheese.cheeseId}
          toggleFave={this.toggleFave}
          picture={cheese.picture}
          favorites={this.props.favorites}
          picture={cheese.picture}
          handleFetch={this.handleFetch}
        />
      );
    });
  }

  render() {
    if (!this.props.favorites.length) {
      return (
        <div> 
          <img src={sadCheese} />
          <h2>You have no favorites, click the logo to find some!</h2>
        </div>
        )
    }
    return (
      <div className="cheeseContainer">
        {this.cheeseCards()}
      </div>
    ) ;
  }

}

export const mapStateToProps = (state) => ({
  cheeses: state.cheeses,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  deleteCheese: (id) => dispatch(deleteCheese(id)),
  addFaveCheese: (id) => dispatch(addFaveCheese(id)),
  fetchSummary: (summary, id) => dispatch(fetchSummary(summary, id))
});

Favorites.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  name: PropTypes.string,
  milk: PropTypes.string,
  region: PropTypes.string,
  favorites: PropTypes.array,
  addFaveCheese: PropTypes.func,
  deleteCheese:PropTypes.func,
  cheeses: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);