import React from 'react';
import { Menu } from './Menu';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme , { shallow, mount } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

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