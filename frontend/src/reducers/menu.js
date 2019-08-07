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


function menuReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        default : return state;
    }
  }
  
  export default menuReducer;