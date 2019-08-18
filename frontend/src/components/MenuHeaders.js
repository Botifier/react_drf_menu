import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sortItemsByName, sortItemsByPrice } from '../actions/menu';

import './MenuHeaders.css';

export class MenuHeaders extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name_ordering: '+',
        price_ordering: '+',
      };
      this.handlePriceSort = this.handlePriceSort.bind(this);
      this.handleNameSort = this.handleNameSort.bind(this);
    }

    change_ordering_direction = (param) => {
        if (param === 'name'){
            if (this.state.name_ordering === '+'){
                this.setState({name_ordering: '-'});
            }
            else if (this.state.name_ordering === '-'){
                this.setState({name_ordering: '+'});
            }
        }
        else if (param === 'price'){
            if (this.state.price_ordering === '+'){
                this.setState({price_ordering: '-'});
            }
            else if (this.state.price_ordering === '-'){
                this.setState({price_ordering: '+'});
            }
        }
    }

    handleNameSort(event) {
        this.props.sortItemsByName(this.state.name_ordering);
        this.change_ordering_direction('name');        
        event.preventDefault();
    }
    
    handlePriceSort(event) {
        this.props.sortItemsByPrice(this.state.price_ordering);
        this.change_ordering_direction('price') ;
        event.preventDefault();
    }

    render() {
      return (
        <tr>
            <th onClick={this.handleNameSort}>name</th>
            <th onClick={this.handlePriceSort}>price</th>
        </tr>
      );
    }
  }

  export default connect(
    null,
    { sortItemsByPrice, sortItemsByName }
  )(MenuHeaders);