import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const STATIC_MENU = [
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

ReactDOM.render(<App menu={STATIC_MENU}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
