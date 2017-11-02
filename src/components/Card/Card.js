import React from 'react';
import { arrayCleaner } from '../../helpers';

const Card = (house) => {
  console.log(house.houseInfo)
  return(
    <div className="cards">
      <h3>{house.houseInfo.name}</h3>
      <p>{house.houseInfo.founded}</p>
      <p>{arrayCleaner(house.houseInfo.seats)}</p> 
      <p>{arrayCleaner(house.houseInfo.titles)}</p>
      <p>{house.houseInfo.coatOfArms}</p>
      <p>{arrayCleaner(house.houseInfo.ancestralWeapons)}</p>
      <p>{house.houseInfo.words}</p>
    </div>
  )
}

export default Card;
