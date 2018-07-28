import { CheeseContainer } from './CheeseContainer';
import React from 'react';
import { shallow } from 'enzyme';

describe('CheeseContainer', () => {

  it('should match the snapShot', () => {
    let wrapper = shallow(<CheeseContainer />)
    expect(wrapper).toMatchSnapshot()
  })
}) 