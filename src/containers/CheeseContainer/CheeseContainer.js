import React from 'react';
import { CheeseCard } from '../../components/CheeseCard';
import { connect } from 'react-redux';
import { addFaveCheese, deleteCheese } from '../../actions';
import { Link } from 'react-router-dom';
import './CheeseContainer.css';
import { fetchSummary } from '../../thunks/fetchSummary';
import PropTypes from 'prop-types'

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

  const handleFetch = async (id, urlSnippet) => {
    const url = `https://fr.wikipedia.org/w/api.php?action=opensearch&search=${urlSnippet}&limit=1&format=json`
    await props.fetchSummary(url, id)
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
          picture={cheese.picture}
          frenchWiki={cheese.frenchWiki}
          button={cheese.cheeseId}
          handleFetch={handleFetch}
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
  addFaveCheese: (id) => dispatch(addFaveCheese(id)),
  fetchSummary: (summary, id) => dispatch(fetchSummary(summary, id))
})

CheeseContainer.propTypes = {
  deleteCheese: PropTypes.func,
  addFaveCheese: PropTypes.func,
  fetchSummary: PropTypes.func,
  cheeses: PropTypes.array,
  favorites: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(CheeseContainer);