import request from 'superagent'

export function getJoke () {
  return request
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.body)
}