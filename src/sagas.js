import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchHelper } from './helpers';

//function* getAccess (action) {
//	try {
//		const accessToken = yield call(getAccessToken, action.code);	
//		yield put({type: 'ACCESS_TOKENS', accessToken});
//		const topArtists = yield call(getTopArtists, accessToken);
//		yield put({type: 'TOP_ARTISTS', topArtists});
//	} catch (e) {
//		yield put({type: 'ACCESS_ERROR', message: e.message});
//	}
//}
//
//function* getSongs (action) {
//	try {
//		const topSongs = yield call(getTopSongs, action.token)			
//		yield put({type: 'TOP_SONGS', topSongs})
//	} catch (e) {
//		yield put({type: 'GET_SONGS_ERROR', message: e.message});
//	}
//}
//
//function* listenForAuth() {
//	yield takeLatest('AUTH_CODE', getAccess)
//}
//
//function* listenForLoadSongs() {
//	yield takeLatest('LOAD_SONGS', getSongs)
//}

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
