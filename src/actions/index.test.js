import * as action from './index';

describe('actions', () => {
  it('should return a type of 'ADD_CHEESE' with cheeses', () => {
    const cheeses = []
    const expected = {
      type: 'ADD_CHEESE',
      cheeses
    }
    const result = action.addCheese(cheeses)
    expect(result).toEqual(expected)
  })

  it('should return a type of 'TOGGLE_FAVE_CHEESE'', () => {
    const expected = {
      type: 'TOGGLE_CHEESE'
    }

    const result = action.toggleFaveCheese
    expect(result).toEqual(expected)
  })

  it('should return a type of 'ADD_FAVE_CHEESE' with a cheeseId', (cheeseId) => {
    const cheeseId = 2
    const expected = {
      type: 'ADD_FAVE_CHEESE',
      cheeseId
    }
    const result = action.AddFaveCheese(cheeseId)
    expect(result).toEqual(expected)
  })

    it('should return a type of 'DELETE_CHEESE' with a cheeseId', (cheeseId) => {
    const cheeseId = 2
    const expected = {
      type: 'DELETE_CHEESE',
      cheeseId
    }
    const result = action.deleteCheese(cheeseId)
    expect(result).toEqual(expected)
  })
}