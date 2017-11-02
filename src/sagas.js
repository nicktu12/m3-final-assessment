import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchHelper, swornApi, masher } from './helpers';

function* initFetch() {
  try {
    const initApi = yield call(fetchHelper, 'http://localhost:3001/api/v1/houses')
    yield put({type: 'HOUSES_API_RES', initApi})
    const secondApi = yield call(swornApi, initApi);
    const results = yield call(masher, initApi, [...secondApi])
    console.log(results)
  } catch (e) {
    yield put({type: 'INIT_API_ERROR', message: e.message})
  }
}

function* listenForInitFetch() {
  yield takeLatest('INIT_API_CALL', initFetch)
}

export default [
  listenForInitFetch,
];
