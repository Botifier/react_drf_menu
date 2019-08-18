import React from 'react';
import  { SearchForm }  from './Search';
import { shallow, mount } from 'enzyme';


describe('Search Component', () => {
  const mocked_functions = {
    getMenu: jest.fn(),
    searchItems: jest.fn(),
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm {...mocked_functions}  />)
  })

  it('should render successfully', () => {    
    expect(wrapper.exists()).toEqual(true);
  });

  it('should call getMenu after rendering', () => {
    expect(mocked_functions.getMenu).toHaveBeenCalled();
  })

  it('should not call searchItems without search field data', () => {
    wrapper.simulate('submit', {
        preventDefault: () => {}
    });
    expect(mocked_functions.searchItems).not.toHaveBeenCalled();
  })

  it('should call searchItems when provided with search field data', () => {
    wrapper.setState({ value: 'spaguetti' });
    wrapper.simulate('submit', {
        preventDefault: () => {}
    });
    expect(mocked_functions.searchItems).toHaveBeenCalled();
})

});