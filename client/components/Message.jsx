import React from 'react'

import data from '../../data/data'

export default class Message extends React.Component {
  constructor (props) {
    super(props)
    console.log('PROPS:', props)
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
    console.log('THIS PROPS', this.props.main)
    console.log('STATE ', this.state.condition)
    this.message = data[this.props.main].message
    this.img = data[this.props.main].img
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
