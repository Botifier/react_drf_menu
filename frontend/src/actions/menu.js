import axios from 'axios';
import { SEARCH_ITEMS, SORT_ITEMS_BY_NAME, SORT_ITEMS_BY_PRICE, FETCH_ALL} from '../constants/actionTypes';


const apiUrl = '/api/menu/';


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


  export const sortItemsByNameSuccess = (items) => {
    return {
      type: SORT_ITEMS_BY_NAME,
      items
    }
  };
  
export const sortItemsByName = (direction) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}?ordering=${direction}name`)
        .then(response => {
            dispatch(sortItemsByNameSuccess(response.data));
        })
        .catch(error => {
            throw(error);
        });
    };
};


export const sortItemsByPriceSuccess = (items) => {
    return {
      type: SORT_ITEMS_BY_PRICE,
      items
    }
  };
  
export const sortItemsByPrice = (direction) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}?ordering=${direction}price`)
        .then(response => {
            dispatch(sortItemsByPriceSuccess(response.data));
        })
        .catch(error => {
            throw(error);
        });
    };
};


export const fetchAll = (items) => {
    return {
      type: FETCH_ALL,
      items
    }
  };
  
export const getMenu = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}`)
        .then(response => {
            dispatch(fetchAll(response.data));
        })
        .catch(error => {
            throw(error);
        });
    };
};
