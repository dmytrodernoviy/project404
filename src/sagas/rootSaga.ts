import { takeEvery } from 'redux-saga/effects';
import { signInSaga, signUpSaga } from '@src/sagas/authSaga';
import { consoleLog } from '@src/utils';
import { AuthActionsConstants } from '@src/redux/auth/types';

export default function* rootSaga() {
  try {
    yield takeEvery(AuthActionsConstants.SIGN_IN_REQUEST, signInSaga);
    yield takeEvery(AuthActionsConstants.SIGN_UP_REQUEST, signUpSaga);
  } catch (e) {
    consoleLog('rootSagaError', e);
  }
}
