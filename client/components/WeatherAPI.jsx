import React from 'react'
import { getWeather } from '../api'

class WeatherApi extends React.Component {
  state = {
    weather: [],
    main: null,
    wind: null
  }

  componentDidMount () {
    getWeather()
      .then(wth => { console.log(wth.weather)
        this.setState({
          weather: wth.weather,
          main: wth.main,
          wind: wth.wind
        })
      })
  }

  render () {
    const {weather, main, wind} = this.state
    return (
      <>
      Search: <input 
      type="text"/>
      <p>
        {weather[0]?.description}
      </p>
      <p>
        {main?.temp}
      </p>
      <p>
        Wind Speed - {wind?.deg} degrees {wind?.speed}m/s
      </p>
      </>
    )
  }
}

export default WeatherApi