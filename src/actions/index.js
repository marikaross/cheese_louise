export const addCheese = (cheeses) => ({
    type: 'ADD_CHEESE',
    cheeses
})

export const toggleFaveCheese = (cheeseId) => ({
    type: 'TOGGLE_FAVORITE_CHEESE',
    cheeseId
})

export const addFaveCheese = (cheeseId) => ({
  type: 'ADD_FAVE_CHEESE',
  cheeseId
})

export const deleteCheese = (cheeseId) => ({
  type: 'DELETE_CHEESE',
  cheeseId
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
