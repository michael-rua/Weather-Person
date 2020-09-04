import React from 'react'

import data from '../../data/data'

export default class Message extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      condition: ''
    }
  }

  message = ''
  img = ''

  componentDidMount () {
    this.setState = {
      condition: this.props.main
    }
    this.message = data[this.state.condition].message
    this.img = data[this.state.condition].img
  }

  render () {
    return (
     <>
     <div className='container'>
       <p>{this.message}</p>
       <img src={`http://openweathermap.org/img/wn/${this.img}d@2x.png`} alt=""/>
     </div>
     </>
    )
  }
}


// function checkWeather () {
//   let message = ''
//   if (condition !== 'clear' || 'drizzle' || 'rainy' || 'clouds' || 'snow' || 'thunderstorm') {
//     message = 'Uh oh, climate change!'
//     // let img = '50'
//     return message
//   } else {

//     return message

//   }
// }