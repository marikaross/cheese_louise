import React, { Component } from 'react';
import * as apiCalls from '../../helper/api-calls';
import CheeseContainer from '../CheeseContainer/CheeseContainer';
import { cheeseCleaner } from '../../helper/cheese-cleaner';
import { connect } from 'react-redux';
import { addCheese } from '../../actions';


export class App extends Component {

    async componentDidMount() {
      
      const allCheeseData = await apiCalls.fetchCheese()
      console.log('hi')
      const cleanCheese = cheeseCleaner(allCheeseData)
      this.props.addCheese(cleanCheese)
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
  cheeses: this.state.cheese
})

export const mapDispatchToProps = (dispatch) => ({
  addCheese: (cheeses) => dispatch(addCheese(cheeses)) 
})

export default connect(mapDispatchToProps, mapDispatchToProps)(App)
