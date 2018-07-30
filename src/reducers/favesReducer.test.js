import { favesReducer } from './favesReducer';
import * as action from '../actions'

describe('favesReducer', () => {
  it('should return the initial state when the type of action is not specified', () => {
    const expected = []
    const result = favesReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should add an id object to the store when selected as a favorite', () => {
    const initialState = [{id: 1}, {id: 7}]
    const newCheese = {id: 5}
    const result = favesReducer(initialState, action.addFaveCheese(newCheese))
    const expected = [{id: 1}, {id: 7}, {id: 5}]
    expect(result).toEqual(expected)
  })

  it('should remove an id object from the store when a user rejcts a cheese as a favorites', () => {
    const initialState = [{id: 1}, {id: 7}]
    const rejectedCheese = {id: 7}
    const result = favesReducer(initialState, action.deleteCheese(rejectedCheese))
    const expected = [{id: 1}]
    expect(result).toEqual(expected)
  }) 
  
})

