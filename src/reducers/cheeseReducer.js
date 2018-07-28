export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default: return state
  }
}

export const hasErrored = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.hasErrored
    default:
    return state
  }
}


export const cheeseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHEESE': 
      return [...state, ...action.cheeses]
    case 'CHEESE_FETCH_DATA_SUCCESS':
      return action.cheeses
    case 'SUMMARY_FETCH_DATA_SUCCESS':
      const addSummary = state.map(cheese => {
       if (cheese.cheeseId === action.id) {
      console.log(action)
        return {...cheese, summary: action.summary}
       }
       else {
        return cheese
       }
    })
      return addSummary
    default:
      return state
  } 
}