import { call, put } from 'redux-saga/effects';
import { serviceAPIAuth } from '@src/services';
import { SignInFormValuesType } from '@src/redux/auth/types';
import { consoleLog, showErrorsByAlert } from '@src/utils';
import {
  SignInFailure,
  SignInSuccess,
  SignUpFailure,
  SignUpSuccess,
} from '@src/redux/auth/actions';

export function* signInSaga(
  payload: SignInFormValuesType = {
    email: '',
    password: '',
  },
) {
  try {
    const response = yield call(serviceAPIAuth.signIn, payload);
    if (response.ok) {
      yield put(SignInSuccess());
    } else {
      yield put(SignInFailure());
      showErrorsByAlert(response.data.msg);
    }
  } catch (e) {
    consoleLog('authSagaError', e);
  }
}

export function* signUpSaga({
  payload = {
    email: '',
    password: '',
    subscribe: false,
  },
  callback = (): void => {},
}) {
  try {
    const response = yield call(serviceAPIAuth.signUp, payload);
    if (response.ok) {
      yield put(SignUpSuccess());
      callback();
    } else {
      yield put(SignUpFailure());
      showErrorsByAlert(response.data.msg);
    }
  } catch (e) {
    consoleLog('authSagaError', e);
  }
}
