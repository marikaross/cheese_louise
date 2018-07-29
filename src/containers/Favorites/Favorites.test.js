import { Favorites } from './Favorites';
import React from 'react';
import { shallow } from 'enzyme';

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
})