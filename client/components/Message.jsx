import React from 'react'
import request from 'superagent'

import data from '../../data/data'

const weatherConditions = Object.keys(data)
const condition = 'clear'
let message = (data[condition].message)

const img = '09'

export default class Message extends React.Component {
  // message () {
  //   if (condition === 'sunny') {
  //     const result = data.sunny.message
  //     return console.log(result)
  //   }
  // }



  render () {
    return (
     <>
     <div className='container'>
      <p>{message}</p>
      <img src={`http://openweathermap.org/img/wn/${img}d@2x.png`} alt=""/>
     </div>
     </>
    )
  }
}
