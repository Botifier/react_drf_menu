import React from 'react';
import  { MenuHeaders }  from './MenuHeaders';
import { shallow, mount } from 'enzyme';


describe('MenuHeaders Component', () => {
  const mocked_functions = {
    sortItemsByName: jest.fn(),
    sortItemsByPrice: jest.fn(),
  }
  let wrapper;
  let headers;

  const clickPriceHeaders = () => {
    headers.at(1).simulate('click', {
        preventDefault: () => {}
    });
  }

  const clickNameHeaders = () => {
    headers.at(0).simulate('click', {
        preventDefault: () => {}
    });
  }

  beforeEach(() => {
    wrapper = shallow(<MenuHeaders {...mocked_functions}  />);
    headers = wrapper.find('th');
  })

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render successfully', () => {    
    expect(wrapper.exists()).toEqual(true);
  });

  it('should call sortItemsByName when name table header is clicked', () => {
    clickNameHeaders();
    expect(mocked_functions.sortItemsByName).toHaveBeenCalled();
  })

  it('should call sortItemsByPrice when price table header is clicked', () => {
    clickPriceHeaders();
    expect(mocked_functions.sortItemsByPrice).toHaveBeenCalled();
  })

  it('should update name_ordering when name table header is clicked', () => {
    clickNameHeaders();
    expect(wrapper.state().name_ordering).toEqual('-');
    clickNameHeaders();
    expect(wrapper.state().name_ordering).toEqual('+');
  })

  it('should update price_ordering when price table header is clicked', () => {
    clickPriceHeaders();
    expect(wrapper.state().price_ordering).toEqual('-');
    clickPriceHeaders();
    expect(wrapper.state().price_ordering).toEqual('+');
  })

});