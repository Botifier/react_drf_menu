import axios from 'axios';
import { SEARCH_ITEMS,} from '../constants/actionTypes';


const apiUrl = 'http://localhost:8000/api/menu/';


export const searchItemsSuccess = (items) => {
    return {
      type: SEARCH_ITEMS,
      items
    }
  };
  
export const searchItems = (searchFilter) => {
    return (dispatch) => {
      return axios.get(`${apiUrl}?search=${searchFilter}`)
        .then(response => {
          dispatch(searchItemsSuccess(response.data));
        })
        .catch(error => {
          throw(error);
        });
    };
  };
