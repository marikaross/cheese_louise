import { isLoading, hasErrored, cheeseFetchDataSuccess } from '../actions';

export const fetchCheese = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
        if(!response.ok) {
          throw Error (response.statusText)
        }
        dispatch(isLoading(false))
        const result = await response.json()
        dispatch(cheeseFetchDataSuccess(result))
      } catch (error) {
        dispatch(hasErrored(true))
      
  }
}