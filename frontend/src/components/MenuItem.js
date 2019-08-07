import React, {Fragment} from 'react';
import './MenuItem.css';

const MenuItem = ({ menuItem }) => {
  const {
    name,
    price,
  } = menuItem;

  return (
    <Fragment>
        <td>{name}</td>
        <td>{price}€</td>
    </Fragment>
  );
}

export default MenuItem;