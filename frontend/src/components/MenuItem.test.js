import React from 'react';
import MenuItem from './MenuItem';
import { shallow, mount } from 'enzyme';


describe('MenuItem Component', () => {
  const props = {
    menuItem: {
        id: 1,
        price: 5,
        name: 'potatoes',
    }
  }
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<MenuItem menuItem={props.menuItem} />)
  })

  it('should render successfully', () => {    
    expect(wrapper.exists()).toEqual(true);
  });
  
});