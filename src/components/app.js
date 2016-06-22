import React from 'react';
import { Component } from 'react';

import SerachBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <SerachBar />
      <WeatherList />
      </div>
    );
  }
}
