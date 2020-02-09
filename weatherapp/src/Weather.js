import React from 'react';

import axios from 'axios';

export default class Weather extends React.Component {
  state = {
      weather: {
        weather: [
          {
            description: 'no idea'
          }
        ]
      }
  }
/*
{
  "coord": {
    "lon": 14.42,
    "lat": 50.09
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 281.56,
    "feels_like": 272.81,
    "temp_min": 279.26,
    "temp_max": 283.15,
    "pressure": 1004,
    "humidity": 37
  },
  "visibility": 10000,
  "wind": {
    "speed": 8.7,
    "deg": 180
  },
  "clouds": {
    "all": 100
  },
  "dt": 1581287154,
  "sys": {
    "type": 1,
    "id": 6835,
    "country": "CZ",
    "sunrise": 1581229494,
    "sunset": 1581264494
  },
  "timezone": 3600,
  "id": 3067696,
  "name": "Prague",
  "cod": 200
}

*/
  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Prague&appid='+process.env.REACT_APP_WEATHER_APIKEY)
      .then(res => {
        const weather = res.data;
        this.setState({ weather });
      })
  }

  render() {
    return (
      <div>
        <h1>Current weather:</h1>
        <span>{ this.state.weather.weather[0].description }</span>
      </div>
    )
  }
}
