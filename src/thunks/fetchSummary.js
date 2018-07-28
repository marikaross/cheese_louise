import {isLoading, hasErrored, summaryFetchDataSuccess } from '../actions';
import { summaryCleaner } from '../helper/cheese-cleaner';

export const fetchSummary = (url, id) => {
  console.log(url)
return async (dispatch) => { 
  try {
    dispatch(isLoading(true))
    const response = await fetch(url)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      console.log(result)
      const cleanSummary = summaryCleaner(result)
      dispatch(summaryFetchDataSuccess(cleanSummary, id))
    } catch (error) {
      dispatch (hasErrored(true))
    }
  }

}