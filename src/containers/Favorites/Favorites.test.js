import { Favorites, mapDispatchToProps, mapStateToProps } from './Favorites';
import React from 'react';
import { shallow } from 'enzyme';
import * as action from '../../actions';
import CheeseCard from '../../components/CheeseCard';

describe('Favorites', () => {
  let wrapper
  let mockCheeses
  let mockFavorites
  let mockDeleteCheese
  let mockAddFaveCheese

  beforeEach(() => {
    mockCheeses = [{name: 'nacho', id: 6}, {name: 'swiss', id: 5}]
    mockFavorites = [{name: 'nacho', id: 6}]
    mockDeleteCheese = jest.fn()
    mockAddFaveCheese = jest.fn()

     wrapper = shallow(<Favorites 
      cheeses={mockCheeses}
      favorites={mockFavorites}
      deleteCheese={mockDeleteCheese}
      addFaveCheese={mockAddFaveCheese}/>)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
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
  })
})