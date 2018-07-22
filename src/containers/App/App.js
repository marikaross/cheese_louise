import React, { Component } from 'react';
import * as apiCalls from '../../helper/api-calls';
import { cheeseCleaner } from '../../helper/cheese-cleaner';
import { connect } from 'react-redux';
import { addCheese } from '../../actions';


class App extends Component {

  async componentDidMount() {
    try {
    const allCheeseData = await apiCalls.fetchCheese()
    const cleanCheese = cheeseCleaner(allCheeseData)
    this.props.addCheese(cleanCheese)
  } catch (error) {
      throw new Error (error.message)
  }
  }

  render() {
    return (
      <div className="App">
        <h1>Cheese-Louise!</h1>
      </div>
    );
  }
}

export default App;

export const mapStateToProps = (state) => ({
  cheese: this.state.cheese
})

export const mapDispatchToProps = (dispatch) => ({
  addCheese: (cheeses) => dispatch(addCheese(cheeses)) 
})

export default
