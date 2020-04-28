import { call, put } from 'redux-saga/effects';
import {
  NavigationService,
  SecureStorageService,
  serviceAPIAuth,
} from '@src/services';
import SplashScreen from 'react-native-splash-screen';
import { consoleLog, networkErrorsHandler } from '@src/utils';
import {
  SignInFailure,
  SignInSuccess,
  SignUpFailure,
  SignUpSuccess,
} from '@src/redux/auth/actions';
import { ApiResponse } from 'apisauce';
import { TSignInResponse } from '@src/constants/commonTypes';
import { navigationStackNames } from '@src/constants';

export function* signInSaga({
  payload = {
    email: '',
    password: '',
  },
}) {
  try {
    const response: ApiResponse<TSignInResponse> = yield call(
      serviceAPIAuth.signIn,
      payload,
    );
    if (response.ok && response.data) {
      const { token } = response.data;
      yield put(SignInSuccess());
      NavigationService.navigate(navigationStackNames.TabStack);
      yield call(serviceAPIAuth.setTokenToHeaders, token);
      yield call(SecureStorageService.setToken, token);
    } else {
      throw response;
    }
  } catch (e) {
    yield put(SignInFailure());
    networkErrorsHandler(e);
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
      throw response;
    }
  } catch (e) {
    yield put(SignUpFailure());
    networkErrorsHandler(e);
    consoleLog('authSagaError', e);
  }
}

export function* autoSignIn() {
  try {
    const token = yield call(SecureStorageService.getToken);
    if (token) {
      yield call(serviceAPIAuth.setTokenToHeaders, token);
      NavigationService.navigate(navigationStackNames.TabStack);
      SplashScreen.hide();
    } else {
      SplashScreen.hide();
    }
  } catch (e) {
    consoleLog('autoSignIn saga', e);
  }
}
