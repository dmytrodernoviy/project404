import {
  SignInFormValuesType,
  SignUpFormValuesType,
} from '@src/redux/auth/types';
import { SignInRequest, SignUpRequest } from '@src/redux/auth/actions';

export const DispatcherService = {
  signIn: (dispatch: Function, payload: SignInFormValuesType): void => {
    dispatch(SignInRequest(payload));
  },

  signUp: (
    dispatch: Function,
    payload: SignUpFormValuesType,
    callback: () => void,
  ): void => {
    dispatch(SignUpRequest(payload, callback));
  },
};
