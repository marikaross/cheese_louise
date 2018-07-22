import { combineReducers } from 'redux';
import { cheeseReducer } from './cheeseReducer';
import { favesReducer } from './favesReducer';

export const rootReducer = () => ({
  cheese: cheeseReducer,
  favorites: favoritesReduce
})