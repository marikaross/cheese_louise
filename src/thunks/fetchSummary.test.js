import { fetchSummary } from './fetchSummary';
import { isLoading, hasErrored, summaryFetchDataSuccess } from '../actions';

describe('fetchSummary' ,() => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
  mockUrl = 'www.fakeUrl.com'
  mockDispatch = jest.fn()
  })

  it('should call dispatch with the isLoading action', () => {
  const thunk = fetchSummary(mockUrl)
  thunk(mockDispatch)
  expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: false}))
  const thunk = fetchSummary(mockUrl)
  await thunk(mockDispatch)
  expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch isLoading(false) if the response is ok',  async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true}))
  const thunk = fetchSummary(mockUrl)
  await thunk(mockDispatch)
  expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  })

  it('should dispatch summaryFetchDataSuccess if all is well', async () => {
   const mockSummary = [{id: 4, summary: 'Here is some stuff about cheese'}]
   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, 
      json: () => Promise.resolve({cheeses: mockSummary})
    }))
   const thunk = fetchSummary(mockUrl)
   await thunk(mockDispatch)
   expect(mockDispatch).toHaveBeenCalledWith(summaryFetchDataSuccess())

   })
})