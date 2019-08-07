import * as actions from './menu'
import * as types from '../constants/actionTypes'

describe('Actions', () => {
  const items = [
    {
        'id': 1,
        'name': 'macaroni',
        'price': 5.0,
    }
  ];

  it('should create an action for successful item search', () => {
    const expectedAction = {
      type: types.SEARCH_ITEMS,
      items,
    };

    expect(actions.searchItemsSuccess(items)).toEqual(expectedAction);
  });

  it('should create an action for successful name sorting', () => {
    const expectedAction = {
        type: types.SORT_ITEMS_BY_NAME,
        items,
      };

    expect(actions.sortItemsByNameSuccess(items)).toEqual(expectedAction);
  });

  it('should create an action for successful price sorting', () => {
    const expectedAction = {
        type: types.SORT_ITEMS_BY_PRICE,
        items,
      };

    expect(actions.sortItemsByPriceSuccess(items)).toEqual(expectedAction);
  });

  it('should create an action to fetch all the menu items', () => {
    const expectedAction = {
        type: types.FETCH_ALL,
        items,
      };

    expect(actions.fetchAll(items)).toEqual(expectedAction);
  });
});