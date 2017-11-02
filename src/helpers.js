export const fetchHelper = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(parseRes => parseRes)
}

export const arrayCleaner = (array) => array.join(', ')

export const swornApi = (array) => {
  array.map(house => {
    console.log(house.swornMembers)
    house.swornMembers.map(member => {
      fetch(('https://galvanize-cors-proxy.herokuapp.com/' + member), {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(member)
      }).then(res=>console.log(res))
    })
  })
}
