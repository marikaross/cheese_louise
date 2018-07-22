export const cheeseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHEESE': 
      return [...state, ...action.cheeses]
    default:
      return state
  } 
}