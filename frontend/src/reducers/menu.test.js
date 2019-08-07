import menuReducer from './menu'
import * as types from '../constants/actionTypes'

describe('menu reducer', () => {
  const items = [
      {
        'id': 1,
        'name': 'macaroni',
        'price': 5.0,
      }
  ];
  it('should return the initial state', () => {
    expect(menuReducer(undefined, {})).toEqual([])
  })

  it('should handle SEARCH_ITEMS', () => {
    expect(
      menuReducer([], {
        type: types.SEARCH_ITEMS,
        items: items,
      })
    ).toEqual(items)
  })

  it('should handle SORT_ITEMS_BY_NAME', () => {
    expect(
      menuReducer([], {
        type: types.SORT_ITEMS_BY_NAME,
        items: items,
      })
    ).toEqual(items)
  })

  it('should handle SORT_ITEMS_BY_PRICE', () => {
    expect(
      menuReducer([], {
        type: types.SORT_ITEMS_BY_PRICE,
        items: items,
      })
    ).toEqual(items)
  })

  it('should handle FETCH_ALL', () => {
    expect(
      menuReducer([], {
        type: types.FETCH_ALL,
        items: items,
      })
    ).toEqual(items)
  })
})