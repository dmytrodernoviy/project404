import { SignInFormValuesType } from '@src/ducks/auth/types';
import { SignInRequest } from '@src/ducks/auth/actions';

export const DispatcherService = {
  signIn: (dispatch, payload: SignInFormValuesType): void => {
    dispatch(SignInRequest(payload));
  },
};
