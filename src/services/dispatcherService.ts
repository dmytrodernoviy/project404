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
import { SnackBarOptions } from '@src/redux/helper/types';

export const DispatcherService = {
  signIn: (payload: SignInFormValuesType): void => {
    store.dispatch(SignInRequest(payload));
  },
  signUp: (payload: SignUpFormValuesType, callback: () => void): void => {
    store.dispatch(SignUpRequest(payload, callback));
  },
  autoSignIn: (): void => {
    store.dispatch(AutoSignIn());
  },

  setAppLanguage: (payload: string): void => {
    store.dispatch(SetAppLanguage(payload));
  },

  getProducts: ({
    callback,
    page,
  }: {
    callback?: () => void;
    page: number;
  }): void => {
    store.dispatch(GetProductsRequest({ callback, page }));
  },
  searchProducts: ({ searchQuery = '' }: { searchQuery: string }): void => {
    store.dispatch(SearchProductRequest({ payload: searchQuery }));
  },
  clearSearchableProducts: (): void => {
    store.dispatch(ClearSearchableProducts());
  },

  toggleSnackBar: ({ isVisible, title }: SnackBarOptions): void => {
    store.dispatch(ToggleSnackBar({ isVisible, title }));
  },
};
