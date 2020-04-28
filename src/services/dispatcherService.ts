import {
  SignInFormValuesType,
  SignUpFormValuesType,
} from '@src/redux/auth/types';
import {
  AutoSignIn,
  SignInRequest,
  SignUpRequest,
} from '@src/redux/auth/actions';
import { SetAppLanguage, ToggleSnackBar } from '@src/redux/helper/actions';
import {
  ClearSearchableProducts,
  GetProductsRequest,
  SearchProductRequest,
} from '@src/redux/products/actions';
import { store } from '@src/redux';

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
  autoSignIn: (dispatch: Function): void => {
    dispatch(AutoSignIn());
  },

  setAppLanguage: (dispatch: Function, payload: string): void => {
    dispatch(SetAppLanguage(payload));
  },

  getProducts: ({
    dispatch,
    callback,
    page,
  }: {
    dispatch: Function;
    callback?: () => void;
    page: number;
  }): void => {
    dispatch(GetProductsRequest({ callback, page }));
  },
  searchProducts: ({
    dispatch,
    searchQuery = '',
  }: {
    dispatch: Function;
    searchQuery: string;
  }): void => {
    dispatch(SearchProductRequest({ payload: searchQuery }));
  },
  clearSearchableProducts: ({ dispatch }: { dispatch: Function }): void => {
    dispatch(ClearSearchableProducts());
  },

  toggleSnackBar: (title: string): void => {
    store.dispatch(ToggleSnackBar(title));
  },
};
