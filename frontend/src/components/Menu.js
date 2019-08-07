import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';


const Menu = ({ menu }) =>
    <table>
        <tbody>
            <tr>
                <th>name</th>
                <th>price</th>
            </tr>
            {(menu || []).map(item =>
            <tr key={item.id}>
            <MenuItem                
                menuItem={item}
            />
            </tr>
            )}
        </tbody>
    </table>


export default Menu