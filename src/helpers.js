export const fetchHelper = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(parseRes => parseRes)
}

export const arrayCleaner = (array) => array.join(', ')

