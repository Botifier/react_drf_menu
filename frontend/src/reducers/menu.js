import { SEARCH_ITEMS, SORT_ITEMS_BY_NAME, SORT_ITEMS_BY_PRICE, FETCH_ALL} from '../constants/actionTypes';


const all_items = (state, action) =>
  action.items;
  
function menuReducer(state=[], action) {
    switch(action.type) {
        case SEARCH_ITEMS :
        case SORT_ITEMS_BY_NAME:
        case SORT_ITEMS_BY_PRICE: 
        case FETCH_ALL: {
            return all_items(state, action);
            }
        default : return state;
    }
  }
  
  export default menuReducer;