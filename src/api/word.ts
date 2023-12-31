const API_URL = "https://random-word-api.herokuapp.com/word"

export function getWords() {
  return fetch(API_URL + '?number=10')
    .then(res => res.json())
}