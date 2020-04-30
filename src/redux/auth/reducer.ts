import {
  AuthActionsConstants,
  AuthActionsType,
  AuthReducerType,
} from '@src/redux/auth/types';

const initialState: AuthReducerType = {
  isSignInLoading: false,
  isSignUpLoading: false,
  isAfterRegisterPopupVisible: false,
  isAnimationLoginLayout: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthReducerType => {
  switch (action.type) {
    case AuthActionsConstants.SIGN_IN_REQUEST:
      return {
        ...state,
        isSignInLoading: true,
      };
    case AuthActionsConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignInLoading: false,
      };
    case AuthActionsConstants.SIGN_IN_FAILURE:
      return {
        ...state,
        isSignInLoading: false,
      };
    case AuthActionsConstants.SIGN_UP_REQUEST:
      return {
        ...state,
        isSignUpLoading: true,
      };
    case AuthActionsConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignUpLoading: false,
      };
    case AuthActionsConstants.SIGN_UP_FAILURE:
      return {
        ...state,
        isSignUpLoading: false,
      };
    case AuthActionsConstants.TOGGLE_AFTER_REGISTER_POPUP:
      return {
        ...state,
        isAfterRegisterPopupVisible: action.payload,
      };
    case AuthActionsConstants.IS_ANIMATION_LOGIN_LAYOUT:
      return {
        ...state,
        isAnimationLoginLayout: action.payload,
      };
    default:
      return state;
  }
};
