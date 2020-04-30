import {
  AuthActionsConstants,
  AuthActionsType,
  SignInFormValuesType,
  SignUpFormValuesType,
} from '@src/redux/auth/types';

export const SignInRequest = (
  payload: SignInFormValuesType,
  callback: () => void,
): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_REQUEST,
  payload,
  callback,
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

export const AutoSignIn = (): AuthActionsType => ({
  type: AuthActionsConstants.AUTO_SIGN_IN,
});

export const ToggleAfterRegisterPopup = (
  payload: boolean,
): AuthActionsType => ({
  type: AuthActionsConstants.TOGGLE_AFTER_REGISTER_POPUP,
  payload,
});

export const IsAnimationLoginLayout = (payload: boolean): AuthActionsType => ({
  type: AuthActionsConstants.IS_ANIMATION_LOGIN_LAYOUT,
  payload,
});
