export const AuthActionsConstants = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE'
};

// Types for actions
export interface SignInFormValuesType {
  email: string;
  password: string;
}

// Types for reducer
export interface AuthReducerType {
  isSignInLoading: boolean;
  isSignUpLoading: boolean;
}

interface SignInRequestAction {
  type: typeof AuthActionsConstants.SIGN_IN_REQUEST;
  payload: SignInFormValuesType;
}

interface SignInSuccessAction {
  type: typeof AuthActionsConstants.SIGN_IN_SUCCESS;
}

interface SignInFailureAction {
  type: typeof AuthActionsConstants.SIGN_IN_FAILURE;
}

export type AuthActionsType =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction;
