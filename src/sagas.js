import { call, put, takeLatest } from 'redux-saga/effects';

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

export default [

];
