import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import MenuHeaders from './MenuHeaders'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state
  };

const Menu = ({ menu }) =>
    <table>
        <tbody>
            <MenuHeaders />
            {(menu || []).map(item =>
            <tr key={item.id}>
            <MenuItem                
                menuItem={item}
            />
            </tr>
            )}
        </tbody>
    </table>


export default connect(
    mapStateToProps,
    null
  )(Menu);