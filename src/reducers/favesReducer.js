export const favesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVE-CHEESE':
      return [...state, action.cheeseId]
    case 'DELETE_CHEESE':
      return state.filter(cheese => favorites.cheeseId !== action.cheeseId)
    default:
      return state
  }
}