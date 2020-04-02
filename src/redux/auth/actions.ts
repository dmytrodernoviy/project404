import {
  AuthActionsConstants,
  AuthActionsType,
  SignInFormValuesType,
  SignUpFormValuesType,
} from '@src/redux/auth/types';

export const SignInRequest = (
  payload: SignInFormValuesType,
): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_REQUEST,
  payload,
});

export const SignInSuccess = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_SUCCESS,
});

export const SignInFailure = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_FAILURE,
});

export const SignUpRequest = (
  payload: SignUpFormValuesType,
  callback: () => void,
): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_UP_REQUEST,
  payload,
  callback,
});

export const SignUpSuccess = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_UP_SUCCESS,
});

export const SignUpFailure = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_UP_FAILURE,
});
