import request from 'superagent'


export function getWeather () {
  let city = ''
   function getCity (input) {
     city = input
    capitalFirst(city)
  }
  return request
    .get('https://api.openweathermap.org/data/2.5/weather')
    .query({q: city})
    .query({appid:'981cdb40f64b3db85d7ff026a5d84c86'})
    .then(response => response.body)
}

function capitalFirst (input) {
  return input.charAt(0).toUpperCase() + input.slice(1) 
}