import { isLoading, hasErrored, cheeseFetchDataSuccess } from '../actions';
import { cheeseCleaner } from '../helper/cheese-cleaner';

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
        const cleanCheeses = cheeseCleaner(result)
        dispatch(cheeseFetchDataSuccess(cleanCheeses))
      } catch (error) {
        dispatch(hasErrored(true))
      }
  }

}