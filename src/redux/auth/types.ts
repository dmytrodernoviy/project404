export enum AuthActionsConstants {
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
  AUTO_SIGN_IN = 'AUTO_SIGN_IN',
  TOGGLE_AFTER_REGISTER_POPUP = 'TOGGLE_AFTER_REGISTER_POPUP',
  IS_ANIMATION_LOGIN_LAYOUT = 'IS_ANIMATION_LOGIN_LAYOUT',
}

// Types for actions
export interface SignInFormValuesType {
  email: string;
  password: string;
}

export interface SignUpFormValuesType extends SignInFormValuesType {
  subscribe: boolean;
}

// Types for reducer
export interface AuthReducerType {
  isSignInLoading: boolean;
  isSignUpLoading: boolean;
  isAfterRegisterPopupVisible: boolean;
  isAnimationLoginLayout: boolean;
}

// Types for actions creators
export interface SignInRequestAction {
  type: typeof AuthActionsConstants.SIGN_IN_REQUEST;
  payload: SignInFormValuesType;
  callback: () => void;
}

interface SignInSuccessAction {
  type: typeof AuthActionsConstants.SIGN_IN_SUCCESS;
}

interface SignInFailureAction {
  type: typeof AuthActionsConstants.SIGN_IN_FAILURE;
}

export interface SignUpRequestAction {
  type: typeof AuthActionsConstants.SIGN_UP_REQUEST;
  payload: SignUpFormValuesType;
  callback: () => void;
}

interface SignUpSuccessAction {
  type: typeof AuthActionsConstants.SIGN_UP_SUCCESS;
}

interface SignUpFailureAction {
  type: typeof AuthActionsConstants.SIGN_UP_FAILURE;
}

interface AutoSignInAction {
  type: typeof AuthActionsConstants.AUTO_SIGN_IN;
}

interface ToggleAfterRegisterPopupAction {
  type: typeof AuthActionsConstants.TOGGLE_AFTER_REGISTER_POPUP;
  payload: boolean;
}

interface IsAnimationLoginLayoutAction {
  type: typeof AuthActionsConstants.IS_ANIMATION_LOGIN_LAYOUT;
  payload: boolean;
}

export type AuthActionsType =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | AutoSignInAction
  | ToggleAfterRegisterPopupAction
  | IsAnimationLoginLayoutAction;
