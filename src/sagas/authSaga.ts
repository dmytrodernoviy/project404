import { call, put } from 'redux-saga/effects';
import {
  NavigationService,
  SecureStorageService,
  ServiceAPIAuth,
} from '@src/services';
import SplashScreen from 'react-native-splash-screen';
import { consoleLog, networkErrorsHandler } from '@src/utils';
import {
  IsAnimationLoginLayout,
  SignInFailure,
  SignInSuccess,
  SignUpFailure,
  SignUpSuccess,
  ToggleAfterRegisterPopup,
} from '@src/redux/auth/actions';
import { ApiResponse } from 'apisauce';
import { TSignInResponse, TSignUpResponse } from '@src/constants/commonTypes';
import { navigationStackNames } from '@src/constants';
import {
  SignInRequestAction,
  SignUpRequestAction,
} from '@src/redux/auth/types';

export function* signInSaga({ payload, callback }: SignInRequestAction) {
  try {
    const response: ApiResponse<TSignInResponse> = yield call(
      ServiceAPIAuth.signIn,
      payload,
    );
    if (response.ok && response.data) {
      yield put(IsAnimationLoginLayout(true));
      const { token } = response.data;
      yield put(SignInSuccess());
      yield call(ServiceAPIAuth.setTokenToHeaders, token);
      yield call(SecureStorageService.setToken, token);
    } else {
      throw response;
    }
  } catch (e) {
    yield put(SignInFailure());
    networkErrorsHandler(e);
    callback();
    consoleLog('authSagaError', e);
  }
}

export function* signUpSaga({ payload, callback }: SignUpRequestAction) {
  try {
    const response: ApiResponse<TSignUpResponse> = yield call(
      ServiceAPIAuth.signUp,
      payload,
    );
    if (response.ok) {
      yield put(SignUpSuccess());
      yield put(ToggleAfterRegisterPopup(true));
      callback();
    } else {
      throw response;
    }
  } catch (e) {
    yield put(SignUpFailure());
    networkErrorsHandler(e);
    callback();
    consoleLog('authSagaError', e);
  }
}

export function* autoSignIn() {
  try {
    const token = yield call(SecureStorageService.getToken);
    if (token) {
      yield call(ServiceAPIAuth.setTokenToHeaders, token);
      NavigationService.navigate(navigationStackNames.TabStack);
      SplashScreen.hide();
    }
  } catch (e) {
    consoleLog('autoSignIn saga', e);
  }
}
