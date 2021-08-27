import {all} from 'redux-saga/effects';
import {loginSaga, logoutSaga} from './Login/LoginSaga';

function* sagas() {
  // 同时并发多个
  yield all([loginSaga(), logoutSaga()]);
}

export default sagas;
