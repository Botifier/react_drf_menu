import React from 'react';
import MenuItem from './MenuItem';
import { shallow, mount } from 'enzyme';


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