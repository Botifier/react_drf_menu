import React from 'react';
import { Menu } from './Menu';
import { shallow, mount } from 'enzyme';


describe('Menu Component', () => {
  const menu = [
    {
      'id': 1,
      'price': 3.0,
      'name': 'potatoes',
    },
  ]
  it('should render successfully', () => {
    const wrapper = shallow(<Menu  menu={menu}/>)
    expect(wrapper.exists()).toEqual(true);
  });

});