import { combineReducers } from 'redux';
import { cheeseReducer } from './cheeseReducer';
import { favesReducer } from './favesReducer';

export const rootReducer = combineReducers({
  cheeses: cheeseReducer,
  favorites: favesReducer
})