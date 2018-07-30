import { cheeseReducer, isLoading, hasErrored } from './cheeseReducer'
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
    const result =  await cheeseReducer(initialState, action.cheeseFetchDataSuccess(cheeses))
    expect(result).toEqual(expected)  
  })

  it('should return a single cheese when the type is SUMMARY_FETCH_DATA_SUCCESS', async () => {
    const intialState = [{name: 'nacho', id: 7, region: 'swim meets everywhere'}]
    const expected = [{name: 'nacho', id: 7, region: 'swim meets everywhere', summary: 'this is not real cheese'}]
    const result = await cheeseReducer(intialState, action.summaryFetchDataSuccess(7, 'this is not real cheese'))
    expect(result).toEqual(expected)
  })
})

describe('isLoading', () => {
  it('should return a boolean', () => {
    const expected = false
    const result = isLoading(false, action.isLoading)
  })
})

describe('hasErrored', () => {
  it('should return a boolean', () => {
    const expected = false
    const result = hasErrored(false, action.hasErrored)
  })
})