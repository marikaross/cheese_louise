import { fetchCheese } from './fetchCheese';
import { isLoading, hasErrored, cheeseFetchDataSuccess } from '../actions';
import { singleCheeseData } from '../helper/mockData.js'

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
    const mockCleanCheese = [{
      frenchWiki: '/Ch%C3%A8vreton',
      cheeseId: '55188f0706ca252277065bf8eb1393eec55cc090',
      name: "Goat Milkton",
      milk: "Goat Milk",
      region: "Ardèche",
      picture: ''
      }]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, 
      json: () => Promise.resolve(singleCheeseData)
    }))
    const thunk = fetchCheese(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(cheeseFetchDataSuccess(mockCleanCheese))
   })
})