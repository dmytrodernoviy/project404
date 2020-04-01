import { call, put } from 'redux-saga/effects';
import { serviceAPIAuth } from '@src/services';
import { SignInFormValuesType } from '@src/ducks/auth/types';
import { consoleLog, showErrorsByAlert } from '@src/utils';
import { SignInFailure, SignInSuccess } from '@src/ducks/auth/actions';

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
