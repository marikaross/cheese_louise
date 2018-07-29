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
    const id = 2
    const expected = {
      type: 'ADD_FAVE_CHEESE',
      id
    }
    const result = action.AddFaveCheese(id)
    expect(result).toEqual(expected)
  })

    it('should return a type of 'DELETE_CHEESE' with a id', (id) => {
    const id = 2
    const expected = {
      type: 'DELETE_CHEESE',
      id
    }
    const result = action.deleteCheese(id)
    expect(result).toEqual(expected)
  })

    it('should return a type of 'IS_LOADING' with a boolean value,' (bool) => {
      const isLoading = true
      const expected = {
        type: 'IS_LOADING',
        isLoading
      }
      const result = action.isLoading(true)
      expect(result).toEqual(expected)
    })

    it('should return a type of 'HAS_ERRORED' with a boolean value', (bool) => {
      const hasErrored = false
      const expected = {
        type: 'HAS_ERRORED',
        hasErrored
      }
      const result = action.hasErrored(false)
      expect(result).toEqual(expected)
    })

    it('should return a type of CHEESE_FETCH_DATA_SUCCESS and a cheeses array', () => {
      const cheeses = [{},{}]
      const expected = {
        type: 'CHEESE_FETCH_DATA_SUCCESS',
        cheeses
      }
      const result = action.cheeseFetchDataSuccess(cheeses)
      expect(result).toEqual(expected)
    })

    it('should return a type of SUMMARY_FETCH_DATA_SUCCESS and an id and summary', () => {
      const summary = 'cheese information'
      const id = 3
      const expected = {
        type: 'SUMMARY_FETCH_DATA_SUCCESS',
        id,
        summary
      }
      const result = action.summaryFetchDataSuccess(summary, id)
    })expect(result).toEqual(expected)
}