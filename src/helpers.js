export const fetchHelper = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(parseRes => parseRes)
}

export const arrayCleaner = (array) => array.join(', ')

export const swornApi = (array) => {
  return array.map(house => {
    return house.swornMembers.map(member => {
      const swornArray = [];
      fetch('http://localhost:3001/api/v1/character', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ url: member })
      })
      .then(res=>res.json())
      .then(parseRes=>swornArray.push(parseRes))
      .catch(e=>alert(e))
      return swornArray
    })
  })
}

export const masher = (arr1, arr2) => {
  return arr1.map((arr, index)=>{
    return Object.assign({}, arr1[index], {swornMembers: arr2[index]}) 
  })
}
