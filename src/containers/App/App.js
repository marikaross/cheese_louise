import React, { Component } from 'react';
import CheeseContainer from '../CheeseContainer/CheeseContainer';
import { connect } from 'react-redux';
import { addCheese } from '../../actions';
import { fetchCheese } from '../../thunks/fetchCheese';



export class App extends Component{
componentDidMount() {
    const url = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=frenchcheese%40public&facet=id&facet=cheese&facet=milk'
    this.props.fetchCheese(url)
  }
  

  render() {
    return (
      <div className="App">
        <h1>Cheese-Louise!</h1>
        <CheeseContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  cheeses: this.state.cheese,
  favorites: this.state.favorites,
  isLoading: this.state.isLoading,
  hasErrored: this.state.hasErrored
})

export const mapDispatchToProps = (dispatch) => ({
  addCheese: (cheeses) => dispatch(addCheese(cheeses)), 
  fetchCheese: (url) => dispatch(fetchCheese(url))
})

export default connect(mapDispatchToProps, mapDispatchToProps)(App)
