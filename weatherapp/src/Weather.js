import React from 'react';

import axios from 'axios';

export default class Weather extends React.Component {
  state = {
    reports: {
      weather: 'noidea'
    }
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Prague&appid=f45e7c857dd14279ce01c3c1cceea8cf`)
      .then(res => {
        const weather = res.data;
        this.setState({ weather });
      })
  }

  render() {
    return (
      <h1>{ this.state.reports.weather}</h1>
    )
  }
}
