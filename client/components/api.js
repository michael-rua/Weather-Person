import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getJoke () {
  return request
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.body)
}