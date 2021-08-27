import {takeEvery, call, put} from 'redux-saga/effects';
import AccountInfo from '../Account/AccountInfo';
import {
  logoutFail,
  LoginActionType,
  loginFail,
  loginSuccess,
  logoutSuccess,
} from './LoginAction';

function mockLogin(params: any) {
  console.log('~~~~~ mockLogin params: ', params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data: AccountInfo = {
        userName: params.userName,
        nickName: 'cy',
        isVIP: true,
      };
      resolve(data);
    }, 3000);
  });
}

function mockLogout(params: any) {
  console.log('~~~~~~ mockLogout params: ', params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
}

function* loginFetch(action: any) {
  try {
    const accountInfo: AccountInfo = yield call(mockLogin, action.params);
    yield put(loginSuccess(accountInfo));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* logoutFetch(action: any) {
  try {
    yield call(mockLogout, action.params);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFail(error));
  }
}

export function* loginSaga() {
  yield takeEvery(LoginActionType.Login, loginFetch);
}

export function* logoutSaga() {
  yield takeEvery(LoginActionType.Logout, logoutFetch);
}
