import {
  AuthActionsConstants,
  AuthActionsType,
  AuthReducerType
} from '@src/ducks/auth/types';

const initialState: AuthReducerType = {
  isSignInLoading: false,
  isSignUpLoading: false
};

export const authReducer = (state = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case AuthActionsConstants.SIGN_IN_REQUEST:
      return {
        ...state,
        isSignInLoading: true
      };
    case AuthActionsConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignInLoading: false
      };
    case AuthActionsConstants.SIGN_IN_FAILURE:
      return {
        ...state,
        isSignInLoading: false
      };
    default:
      return state;
  }
};
