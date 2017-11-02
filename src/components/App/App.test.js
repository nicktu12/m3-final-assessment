import React from 'react';
import App from './App';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

const middlewares = [];
const mockStore = configureStore(middlewares)

describe('app test', ()=>{
  //  it('should render component', ()=> {
  //    const mockFunc = jest.fn();
  //    const wrapper = shallow(
  //      <App houseData={[]} initFetch={mockFunc} store={mockStore}/>
  //    )
  //    expect(wrapper.length).toEqual(1)
  //  })
})
