import { Header } from './Header';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header', () => {

  it('should match the snapShot', () => {
    let wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})