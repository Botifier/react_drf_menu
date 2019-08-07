import { SEARCH_ITEMS} from '../constants/actionTypes';


const INITIAL_STATE = [
    {
        id: 0,
        name: 'mached potatoes',
        price: 4,
    },
    {
        id: 1,
        name: 'fried chicken',
        price: 4,
    }, 
    {
        id: 2,
        name: 'grilled chicken',
        price: 5,
    }, 
    {
        id: 3,
        name: 'grilled beef',
        price: 8,
    },
];

const all_items = (state, action) =>
  action.items;
  
function menuReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case SEARCH_ITEMS :{
            return all_items(state, action);
            }
        default : return state;
    }
  }
  
  export default menuReducer;