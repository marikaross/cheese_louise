export const addCheese = (cheeses) => ({
    type: 'ADD_CHEESE',
    cheeses
})

export const toggleFaveCheese = (cheeseId) => ({
    type: 'TOGGLE_FAVORITE_CHEESE',
    cheeseId
})

export const addFaveCheese = (id) => ({
  type: 'ADD_FAVE_CHEESE',
  id
})

export const deleteCheese = (id) => ({
  type: 'DELETE_CHEESE',
  id
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
})

export const cheeseFetchDataSuccess = (cheeses) => ({
  type: 'CHEESE_FETCH_DATA_SUCCESS',
  cheeses
})

export const summaryFetchDataSuccess = (summary, id) => ({
  type: 'SUMMARY_FETCH_DATA_SUCCESS',
  id, 
  summary
})
