import React, { Component } from 'react';
import CheeseContainer from '../CheeseContainer/CheeseContainer';
import Favorites from '../Favorites/Favorites';
import { Header } from '../Header/Header';
import { connect } from 'react-redux';
import { addCheese } from '../../actions';
import { fetchCheese } from '../../thunks/fetchCheese';
import { Route, withRouter } from 'react-router-dom';
import './App.css';



export class App extends Component{
componentDidMount() {
    const url = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=frenchcheese%40public&facet=id&facet=cheese&facet=milk'
    this.props.fetchCheese(url)
  }
  

  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' component={CheeseContainer} />
        <Route exact path='/favorites' component={Favorites} />
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

export default withRouter(connect(mapDispatchToProps, mapDispatchToProps)(App))
