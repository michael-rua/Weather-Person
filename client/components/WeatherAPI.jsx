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
      Search: <input id="input" name= 'input' 
      value={this.state.input}
      onChange={this.handleChange}/>
      <button id="btn" onClick={this.handleClick}>Show me the Weather</button>
      <h3>
        How does it look outside? { weather[0]?.description}
      </h3>
      
      <h3>
        Temperature: { main?.temp}
      </h3>
      <h3>
        Wind Speed & Direction: { wind?.deg} degrees { wind?.speed}m/s
      </h3>
      </>
    )
  }
}

export default WeatherApi