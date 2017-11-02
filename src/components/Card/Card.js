import React from 'react';
import { arrayCleaner } from '../../helpers';

const Card = (house) => {
  return(
    <div className="cards">
      <h3>{house.houseInfo.name}</h3>
      { house.houseInfo.founded && <p><span>Founded:</span> {house.houseInfo.founded}</p> }
      <p><span>House Seat:</span> {arrayCleaner(house.houseInfo.seats)}</p> 
      <p><span>Titles:</span> {arrayCleaner(house.houseInfo.titles)}</p>
      <p><span>Coat of Arms:</span> {house.houseInfo.coatOfArms}</p>
      <p><span>Ancestral Weapons:</span> {arrayCleaner(house.houseInfo.ancestralWeapons)}</p>
      { house.houseInfo.words && <p><span>House Words:</span> "{house.houseInfo.words}"</p> }
    </div>
  )
}

export default Card;
