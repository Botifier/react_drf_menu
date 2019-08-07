import React from 'react';
import './App.css';
import Menu from './Menu';
import SearchForm from './Search';


const App = ({ menu }) =>
  <div>
    <SearchForm />
    <Menu menu={menu} />
  </div>

export default App;