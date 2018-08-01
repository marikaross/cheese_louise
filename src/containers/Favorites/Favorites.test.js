import { Favorites, mapDispatchToProps, mapStateToProps } from './Favorites';
import React from 'react';
import { mount, shallow } from 'enzyme';
import * as action from '../../actions';
import { CheeseCard } from '../../components/CheeseCard';
import { fetchSummary } from '../../thunks/fetchSummary';

jest.mock('../../thunks/fetchSummary');

describe('Favorites', () => {
  let wrapper
  let cardWrapper
  let mockCheeses
  let mockFavorites
  let mockAddFaveCheese
  let mockDeleteCheese
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
    mockToggleFave = jest.fn()
    mockHistory = []
    mockIsDuplicate = jest.fn()
    mockHandleFetch = jest.fn()
    mockMakeUrl = jest.fn()


    wrapper = mount (
      <Favorites
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


  it('toggleFave should call isDuplicate', () => {

    cardWrapper = shallow (
      <CheeseCard
        id={'4'}
        cheeses={mockCheeses}
        favorites={mockFavorites}
        addFaveCheese={mockAddFaveCheese}
        deleteCheese={mockDeleteCheese}
        toggleFave={mockToggleFave}
        history={[]}
        picture={'pic'}
      />)
 
    let favSpy = jest.spyOn(wrapper.instance(), 'toggleFave');
    let duplicateSpy = jest.spyOn(wrapper.instance(), 'isDuplicate')

    let mockEvent = { target: {value: '4'}}

    cardWrapper.find('button').simulate('click', mockEvent);


    expect(duplicateSpy).toBeCalled()
  })

  it('should call handleFetch when the link is clicked', async () => {
    let cardWrapper = shallow( <CheeseCard 
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
    cardWrapper.find('.test').simulate('click')
    expect(mockHandleFetch).toBeCalled()
  })

  it('handleFetch should call fetchSummary', () => {
    let mockMakeUrl = jest.fn()
    let mockHandleFetch = jest.fn()
    let mockCheeses = [{name: 'nacho', id: 6}, {name: 'swiss', id: 5}]
    let mockFavorites = [{name: 'nacho', id: 6}]
    let mockAddFaveCheese = jest.fn()
    let mockDeleteCheese = jest.fn()
    let mockToggleFave = jest.fn()
    let mockIsDuplicate = jest.fn()

    let cardWrapper = shallow( <CheeseCard 
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
    cardWrapper.find('a').simulate('click')
    expect(fetchSummary).toBeCalled()
  })

  it('should call toggleFave when the button is clicked', () => {
    let mockToggleFave = jest.fn()
    wrapper = shallow (
      <CheeseCard 
        cheeses={mockCheeses}
        favorites={mockFavorites}
        addFaveCheese={mockAddFaveCheese}
        deleteCheese={mockDeleteCheese}
        toggleFave={mockToggleFave}
        history={[]}
        picture={'pic'}
      />)
 

    wrapper.find('button').simulate('click');
    expect(mockToggleFave).toBeCalled()
  });

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
      const id = 8
      const summary = 'cheese stuff'
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {
        type: 'SUMMARY_FETCH_DATA_SUCCESS',
        id, 
        summary
      }
      const actionToDispatch = fetchSummary('cheese stuff', 8)
      mappedProps.fetchSummary('cheese stuff', 8)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
})
})