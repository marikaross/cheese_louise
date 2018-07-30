import { cheeseReducer } from './cheeseReducer'
import * as action from '../actions'

describe('cheeseReducer', () => {
  it('should return the initial state when the action is undefined', () => {
    const expected = []
    const result = cheeseReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should add cheeses to the state when the type is ADD_CHEESE', () => {
    const initialState = []
    const cheeses = [{name:'brie'}]
    const expected = [...cheeses]
    const result = cheeseReducer(initialState, action.addCheese(cheeses))
    expect(result).toEqual(expected)
  })

  it('should return the cheeses state when the type is CHEESE_FETCH_DATA_SUCCESS', async () => {
    const initialState = []
    const cheeses = [{name:'brie'}]
    const expected = [...cheeses]
    const result =  await cheeseReducer(initialState, action.cheeseFetchDataSuccess())
    expect(result).toEqual(expected)
  })

})