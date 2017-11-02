import { houses } from './not-fake-reducer';
import { mockHouses } from '../mockData';

describe('reducers', ()=>{
  it('should have a default state', ()=>{
    expect(houses(undefined, {})).toEqual({});
  });

  it('should return data when passed an action', ()=>{
    const expectedAction = {
      type: 'HOUSES_API_RES', 
      initApi: mockHouses
    };

    expect(houses(undefined, expectedAction)).toEqual(mockHouses);
  });
});
