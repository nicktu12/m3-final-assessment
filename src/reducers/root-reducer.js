import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houses } from './not-fake-reducer';

const rootReducer = combineReducers({
  houses
});


export default rootReducer;
