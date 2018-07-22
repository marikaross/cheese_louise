import { cheeseReducer } from './cheeseReducer'
import * as action from '../actions'

describe('cheeseReducer', () => {
  it('should return the initial state when the action is undefined', () => {
    const expected = []
    const result = cheeseReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should add cheeses to the state when the type is 'ADD_CHEESE'', () => {
    const cheeses = {name:'brie'}
    const expected = [...cheeses]
    const result = cheeseReducer(cheeses)
    expect(result).toEqual(expected)
  })
})