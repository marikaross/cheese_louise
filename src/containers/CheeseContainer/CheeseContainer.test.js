import { CheeseContainer, mapStateToProps, mapDispatchToProps } from './CheeseContainer';
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../actions';
import { fetchSummary } from '../../thunks/fetchSummary'

describe('CheeseContainer', () => {
  let wrapper
  let mockCheeses
  let mockFavorites
  let mockAddFaveCheese
  let mockDeleteCheese
  let mockFetchSummary

  beforeEach(() => {
    mockCheeses = [{name: 'nacho', id: 6}, {name: 'swiss', id: 5}]
    mockFavorites = [{name: 'nacho', id: 6}]
    mockAddFaveCheese = jest.fn()
    mockDeleteCheese = jest.fn()
    mockFetchSummary = jest.fn()

    wrapper = shallow(
      <CheeseContainer 
        cheeses={mockCheeses}
        favorites={mockFavorites}
        addFaveCheese={mockAddFaveCheese}
        deleteCheese={mockDeleteCheese}
      />)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return a cheeses array, a favorites array', () => {
      const mockState = {
        cheeses: mockCheeses,
        favorites: mockFavorites,
        addFaveCheese: mockAddFaveCheese
      }

      const expectedProps = {
        cheeses: mockCheeses,
        favorites: mockFavorites
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expectedProps)
    })
  }) 

  describe('mapDispatchToProps', () => {
    it('calls dispatch with deleteCheese', () => {
      const mockState = {
        cheeses: mockCheeses,
        favorites: mockFavorites,
        addFaveCheese: mockAddFaveCheese,
        deleteCheese: mockDeleteCheese
      }

      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = action.deleteCheese({id: 5})
      mappedProps.deleteCheese({id: 5})
      expect(mockDispatch).toBeCalledWith(actionToDispatch)
    })

    it('calls dispatch with addFaveCheese', () => {
       const mockState = {
        cheeses: mockCheeses,
        favorites: mockFavorites,
        addFaveCheese: mockAddFaveCheese,
        deleteCheese: mockDeleteCheese
      }

      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = action.addFaveCheese({id: 8})
      mappedProps.addFaveCheese({id: 8})
      expect(mockDispatch).toBeCalledWith(actionToDispatch)
    })

    it.skip('calls dispatch with addSummary', () => {
       const mockState = {
        cheeses: mockCheeses,
        favorites: mockFavorites,
        addFaveCheese: mockAddFaveCheese,
        deleteCheese: mockDeleteCheese,
        addSummary: mockFetchSummary
      }
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = fetchSummary('cheese stuff', 8)
      mappedProps.fetchSummary('cheese stuff', 8)
      expect(mockDispatch).toBeCalledWith(actionToDispatch)
    })
  })
})

