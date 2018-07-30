import {App, mapStateToProps, mapDispatchToProps} from './App';
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../actions';

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
      addCheese={mockAddCheese}
      fetchCheese={mockFetchCheese}/>)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should return an object with a cheeses array and a favorites array', () => {
      const mockState = {
        cheeses: mockCheeses,
        favorites: mockFavorites,
        addCheese: mockAddCheese
      }

      const expectedProps = {
        cheeses: mockCheeses,
        favorites: mockFavorites
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expectedProps)
  })

  it('should call dispatch with addCheese', () => {
      const mockState = {
        cheeses: mockCheeses,
        favorites: mockFavorites,
        addCheese: mockAddCheese,
        fetchCheese: mockFetchCheese
      }

      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = action.addCheese({name: 'american'})
      mappedProps.addCheese({name: 'american'})
      expect(mockDispatch).toBeCalledWith(actionToDispatch)
  })

})