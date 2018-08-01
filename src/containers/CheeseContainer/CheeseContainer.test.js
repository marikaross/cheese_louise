import { CheeseContainer, mapStateToProps, mapDispatchToProps } from './CheeseContainer';
import { CheeseCard } from '../../components/CheeseCard'
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../actions';
import { fetchSummary } from '../../thunks/fetchSummary';

jest.mock('../../thunks/fetchSummary')

describe('CheeseContainer', () => {
  let wrapper
  let cardWrapper
  let mockCheeses
  let mockFavorites
  let mockAddFaveCheese
  let mockDeleteCheese
  let mockFetchSummary
  let mockToggleFave
  let mockHistory
  let mockIsDuplicate
  let mockHandleFetch
  let mockMakeUrl

  beforeEach(() => {

    mockCheeses = [{name: 'nacho', id: 6, picture: "none"}, {name: 'swiss', id: 5, picture: "none"}]
    mockFavorites = [{name: 'nacho', id: 6, picture: 'none'}]
    mockAddFaveCheese = jest.fn()
    mockDeleteCheese = jest.fn()
    mockFetchSummary = jest.fn()
    mockToggleFave = jest.fn()
    mockHistory = []
    mockIsDuplicate = jest.fn()
    mockHandleFetch = jest.fn()
    mockMakeUrl = jest.fn()


    wrapper = shallow (
      <CheeseContainer 
        cheeses={mockCheeses}
        favorites={mockFavorites}
        addFaveCheese={mockAddFaveCheese}
        deleteCheese={mockDeleteCheese}
        isDuplicate={mockIsDuplicate}
        handleFetch={mockHandleFetch}
      />)

    cardWrapper = shallow( <CheeseCard 
        cheeses={mockCheeses}
        favorites={mockFavorites}
        addFaveCheese={mockAddFaveCheese}
        deleteCheese={mockDeleteCheese}
        toggleFave={mockToggleFave}
        history={[]}
        makeUrl={mockMakeUrl}
        handleFetch={mockHandleFetch}
        picture={'picture'}
      />)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleFave when the button is clicked', () => {

    cardWrapper.find('button').simulate('click');
    expect(mockToggleFave).toBeCalled();
  });

  it('should call deleteCheese if the cheeseId exists in state', () => {
    const mockCheese = {id: 5}
    const cardWrapper = shallow (
      <CheeseCard 
        cheeses={mockCheeses}
        favorites={mockFavorites}
        addFaveCheese={mockAddFaveCheese}
        deleteCheese={mockDeleteCheese}
        toggleFave={mockToggleFave}
        picture={'hi'}

      />)

    cardWrapper.find('button').simulate('click');
    wrapper.instance().toggleFave(mockCheese)
    wrapper.instance().isDuplicate(mockCheese)
    expect(mockDeleteCheese).toBeCalled()
  })

  it('should add a cheese to favorites if the id is not in the store', () => {
    const mockCheese = {id: 8}
    cardWrapper.find('button').simulate('click');
    wrapper.instance().toggleFave(mockCheese)
    expect(mockAddFaveCheese).toBeCalled()
  })

  it('should call handleFetch when the link is clicked', async () => {
 
    cardWrapper.find('.test').simulate('click')
    expect(mockHandleFetch).toBeCalled()
  })

  it('handleFetch should call fetchSummary', () => {
    cardWrapper.find('.test').simulate('click')
    expect(mockFetchSummary).toBeCalled()
  })


  describe('isDuplicate', () => {
    it('should return a boolean', () => {
      const mockCheese = {id: 8}
      cardWrapper.find('button').simulate('click');
      const expected = undefined
      const result = wrapper.instance().isDuplicate(8)
      wrapper.instance().isDuplicate(mockCheese)
      expect(result).toEqual(expected)

    })
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

    it('calls dispatch with fetchSummary', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = fetchSummary('cheese stuff', 8)
      mappedProps.fetchSummary('cheese stuff', 8)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})

