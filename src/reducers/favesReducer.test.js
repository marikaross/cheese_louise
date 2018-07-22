import { favesReducer } from './favesReducer';
import * as action from '../actions'

describe('favesReducer', () => {
  it('should return the initial state when the type of action is not specified', () => {
    const expected = []
    const result = favesReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should add a cheeseId to the store when selected as a favorite', () => {
    const favorites = [{cheeseId: 1}, {cheeseId: 7}]
    const newCheese = [{cheeseId: 5}]
    const result = action.addFaveCheese(5)
    const expected = [{cheeseId: 1}, {cheeseId: 7}, {cheeseId: 5}]
    expect(result).toEqual(expected)
  })

  it('should remove a cheeseId from the store when a user rejcts a cheese as a favorites', () => {
    const favorites = [{cheeseId: 1}, {cheeseId: 7}]
    const rejectedCheese = [{cheeseId: 7}]
    const result = action.deleteCheese(7)
    const expected = [{cheeseId: 1}]
    expect(result).toEqual(expected)
  }) 
  
})

