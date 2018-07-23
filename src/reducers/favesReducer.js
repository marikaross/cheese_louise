export const favesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVE_CHEESE':
      return [...state, action.id]
    case 'DELETE_CHEESE':
      const newCheese = state.filter(cheese => cheese !== action.id)
      return newCheese
    default:
      return state
  }
}