import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchHelper } from './helpers';

function* initFetch() {
  try {
    const initApi = yield call(fetchHelper, 'http://localhost:3001/api/v1/houses')
    yield put({type: 'HOUSES_API_RES', initApi})
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
