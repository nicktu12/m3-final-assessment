import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { mockHouses } from '../../mockData';

describe('card', ()=>{
  it('should match snapshot', ()=> {
    const wrapper = shallow(
      <Card houseInfo={mockHouses[0]} key={1} />
    )
    expect(wrapper).toMatchSnapshot();
  })
})
