import React from 'react';
import MenuItem from './MenuItem';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme , { shallow, mount } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

const props = {
    menuItem: {
        id: 1,
        price: 5,
        name: 'potatoes',
    }
}


describe('MenuItem Component', () => {
  it('should render successfully', () => {
    const wrapper = shallow(<MenuItem menuItem={props.menuItem} />)
    expect(wrapper.exists()).toEqual(true);
  });
});