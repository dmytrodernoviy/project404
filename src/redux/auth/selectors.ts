import { RootStateType } from '@src/redux/types';

export const AuthSelectors = {
  isSignInLoading: (state: RootStateType): boolean =>
    state.auth.isSignInLoading,
  isSignUpLoading: (state: RootStateType): boolean =>
    state.auth.isSignUpLoading,
};
