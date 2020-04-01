import { takeEvery } from 'redux-saga/effects';
import { signInSaga } from '@src/sagas/authSaga';
import { AuthActionsConstants } from '@src/ducks/auth/types';
import { consoleLog } from '@src/utils';

export default function* rootSaga() {
  try {
    yield takeEvery(AuthActionsConstants.SIGN_IN_REQUEST, signInSaga);
  } catch (e) {
    consoleLog('rootSagaError', e);
  }
}
