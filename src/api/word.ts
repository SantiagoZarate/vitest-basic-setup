const API_URL = "https://random-word-api.herokuapp.com/word"

export function getWords(wordNumber : number) {
  return fetch(API_URL + '?number=' + wordNumber)
    .then(res => res.json())
}