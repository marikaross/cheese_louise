import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper
  let mockCheeses
  let mockFavorites
  let mockIsLoading
  let mockHasErrored
  let mockFetchCheese
  let mockAddCheese

  beforeEach(() => {
    mockCheeses = [{name: 'nacho', id: 6}, {name: 'swiss', id: 5}]
    mockFavorites = [{name: 'nacho', id: 6}]
    mockFetchCheese = jest.fn()
    mockAddCheese = jest.fn()
    mockHasErrored = false
    mockIsLoading = true

     wrapper = shallow(<App 
      cheeses={mockCheeses}
      favorites={mockFavorites}
      isLoading={mockIsLoading}
      hasErrored={mockHasErrored}
      addFaveCheese={mockAddCheese}
      fetchCheese={mockFetchCheese}/>)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})