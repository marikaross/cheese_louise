import React, { Component } from 'react';
import CheeseContainer from '../CheeseContainer/CheeseContainer';
import Favorites from '../Favorites/Favorites';
import { CheeseDetails } from '../../components/CheeseDetails';
import { Header } from '../Header/Header';
import { connect } from 'react-redux';
import { addCheese } from '../../actions';
import { fetchCheese } from '../../thunks/fetchCheese';
import { Route, withRouter } from 'react-router-dom';
import './App.css';



export class App extends Component{

   async componentDidMount() {
    const url = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=frenchcheese%40public&facet=id&facet=cheese&facet=milk'
    await this.props.fetchCheese(url)
  }
  

  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' component={CheeseContainer} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/:cheeseId' render={({ match }) => {
          const oneCheese = this.props.cheeses.find(cheese => {
            return cheese.cheeseId === match.params.cheeseId
          })
          return (
            <div>
              <CheeseDetails {...oneCheese} />
            </div>
            )
        }
      } />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  cheeses: state.cheeses,
  favorites: state.favorites,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

export const mapDispatchToProps = (dispatch) => ({
  addCheese: (cheeses) => dispatch(addCheese(cheeses)), 
  fetchCheese: (url) => dispatch(fetchCheese(url))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
