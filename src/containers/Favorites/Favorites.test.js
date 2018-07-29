import { Favorites } from './Favorites';
import React from 'react';
import { shallow } from 'enzyme';

describe('Favorites', () => {

  it('should match the snapShot', () => {
    let wrapper = shallow(<Favorites />)
    expect(wrapper).toMatchSnapshot()
  })
})