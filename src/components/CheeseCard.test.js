import { CheeseCard } from './CheeseCard';
import React from 'react';
import { shallow } from 'enzyme';

describe('CheeseCard', () => {

  it('should match the snapShot', () => {
    let wrapper = shallow(<CheeseCard />)
    expect(wrapper).toMatchSnapshot()
  })
})