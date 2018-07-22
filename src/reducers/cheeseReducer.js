import { addCheese } from '../actions'

export const cheeseReducer = (state = [], action.type) => {
  switch (action.type) {
    case 'ADD_CHEESE': 
      return [...state, ...action.cheeses]
    default:
      return state
  } 
}