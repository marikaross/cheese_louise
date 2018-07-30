import { CheeseDetails } from './CheeseDetails';
import React from 'react';
import { shallow } from 'enzyme';

describe('CheeseDetails', () => {

  it('should match the snapShot', () => {
    let wrapper = shallow(<CheeseDetails />)
    expect(wrapper).toMatchSnapshot()
  })
}) 