import { combineReducers } from 'redux';
import { cheeseReducer, isLoading, hasErrored } from './cheeseReducer';
import { favesReducer } from './favesReducer';

export const rootReducer = combineReducers({
  cheeses: cheeseReducer,
  favorites: favesReducer,
  isLoading,
  hasErrored
})