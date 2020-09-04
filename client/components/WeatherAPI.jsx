import React from 'react'
import { getWeather } from '../api'

class WeatherApi extends React.Component {
  state = {
    weather: [],
    main: null,
    wind: null,
    input: ''
  }

  // componentDidMount () {
  //   getWeather(this.state.input)
  //     .then(wth => { console.log(wth.weather)
  //       this.setState({
  //         weather: wth.weather,
  //         main: wth.main,
  //         wind: wth.wind
  //       })
  //     })
  // }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }



   capitalFirst = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1) 
  }




handleClick = () => {
  console.log(this.state.input)
  
  const input = this.state.input
 
 let finalCity = this.capitalFirst(input) 
 console.log(finalCity)
  getWeather(finalCity)
  .then(wth => { console.log(wth.weather)
          this.setState({
            weather: wth.weather,
            main: wth.main,
            wind: wth.wind,
            input: ''
          })
        })
    }
  

    
    

  render () {
    const {weather, main, wind} = this.state
    return (
      <>
      Search: <input name= 'input' 
      value={this.state.input}
      onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Show me the Weather</button>
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