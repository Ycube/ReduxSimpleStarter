import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state={term:''};

    this.onInputChange = this.onInputChange.bind(this); 
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //Todo: fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term:'' });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className='input-group'>
        <input 
          placeholder='Get 5 day forecast for your favorite cities  '
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button> 
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//passing in null here means this container does not care about the state
export default connect(null, mapDispatchToProps)(SearchBar);