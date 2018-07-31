import React, { Component } from 'react';
import CheeseContainer from '../CheeseContainer/CheeseContainer';
import Favorites from '../Favorites/Favorites';
import { CheeseDetails } from '../../components/CheeseDetails';
import { Header } from '../Header/Header';
import { connect } from 'react-redux';
import { addCheese } from '../../actions';
import { fetchCheese } from '../../thunks/fetchCheese';
import { Route, withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <Switch>
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
        </Switch>
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


App.propTypes = {
  cheeses: PropTypes.array,
  favorites: PropTypes.array,
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.bool,
  addCheese: PropTypes.func,
  fetchCheese: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
