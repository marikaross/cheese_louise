import { fetchCheese } from './fetchCheese';
import { isLoading, hasErrored, cheeseFetchDataSuccess } from '../actions';

describe('fetchCheese' ,() => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
  mockUrl = 'www.fakeUrl.com'
  mockDispatch = jest.fn()
  })

  it('should call dispatch with the isLoading action', () => {
  const thunk = fetchCheese(mockUrl)
  thunk(mockDispatch)
  expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: false}))
  const thunk = fetchCheese(mockUrl)
  await thunk(mockDispatch)
  expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch isLoading(false) if the response is ok',  async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true}))
  const thunk = fetchCheese(mockUrl)
  await thunk(mockDispatch)
  expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  })

  it('should dispatch cheeseFetchDataSuccess if all is well', async () => {
   const mockCheese = [{name: 'cheddar'},{name: 'gruyere'}]
   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, 
      json: () => Promise.resolve({cheeses: mockCheese})
    }))
   const thunk = fetchCheese(mockUrl)
   await thunk(mockDispatch)
   expect(mockDispatch).toHaveBeenCalledWith(cheeseFetchDataSuccess())

   })
})