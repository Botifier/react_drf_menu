import React, {Component} from 'react';

import './MenuHeaders.css';

class MenuHeaders extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <tr>
            <th>name</th>
            <th>price</th>
        </tr>
      );
    }
  }

  export default MenuHeaders