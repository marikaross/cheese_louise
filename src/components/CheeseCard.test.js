import { CheeseCard } from './CheeseCard';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('CheeseCard', () => {

  it('should match the snapShot', () => {
    let wrapper = shallow(<CheeseCard favorites={[{}, {}]} picture={'photo of cheese'}/>)
    expect(wrapper).toMatchSnapshot()
  })


  it('should call makeUrl when the link is clicked', () => {
    let mockMakeUrl = jest.fn()
    let mockHandleFetch = jest.fn()
    let mockCheeses = [{name: 'nacho', id: 6}, {name: 'swiss', id: 5}]
    let mockFavorites = [{name: 'nacho', id: 6}]
    let mockAddFaveCheese = jest.fn()
    let mockDeleteCheese = jest.fn()
    let mockFetchSummary = jest.fn()
    let mockToggleFave = jest.fn()
    let mockHistory = []
    let mockIsDuplicate = jest.fn()

    let wrapper = shallow( <CheeseCard 
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
    wrapper.find('.details-link').simulate('click')
    expect(makeUrl).toBeCalled()
  })
})