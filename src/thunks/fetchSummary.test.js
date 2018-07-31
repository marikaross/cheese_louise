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
    const mockresult = [
  "bee",
  [
    "Bee"
  ],
  [
    "Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the European honey bee, for producing honey and beeswax."
  ],
  [
    "https://en.wikipedia.org/wiki/Bee"
  ]
]

    const id = 4

   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, 
      json: () => Promise.resolve(mockresult)
    }))
   const thunk = fetchSummary(mockUrl, id)
   await thunk(mockDispatch)
   expect(mockDispatch).toHaveBeenCalledWith(summaryFetchDataSuccess("Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the European honey bee, for producing honey and beeswax.", 4))

   })
})