import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchItems, getMenu } from '../actions/menu';
import './Search.css';


class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.props.getMenu();
    }

    handleSubmit(event) {
      if (this.state.value) {
        this.props.searchItems(this.state.value);
      }
      event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Search...'/>
            <input type="submit" value="Search" />
        </form>
      );
    }
  }

  export default connect(
    null,
    { searchItems, getMenu }
  )(SearchForm);