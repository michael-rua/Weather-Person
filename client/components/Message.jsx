import React from 'react'
import request from 'superagent'

import data from '../../data/data'

const weatherConditions = Object.keys(data)
const condition = 'sunny'
let message = (data[condition].message)


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
{message}
     </div>
     </>
    )
  }
}
