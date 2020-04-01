import {
  AuthActionsConstants,
  AuthActionsType,
  SignInFormValuesType
} from '@src/ducks/auth/types';

export const SignInRequest = (
  payload: SignInFormValuesType
): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_REQUEST,
  payload
});

export const SignInSuccess = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_SUCCESS
});

export const SignInFailure = (): AuthActionsType => ({
  type: AuthActionsConstants.SIGN_IN_FAILURE
});
