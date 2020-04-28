import { combineReducers } from 'redux';
import { authReducer } from '@src/redux/auth/reducer';
import { RootStateType } from '@src/redux/types';
import { helperReducer } from '@src/redux/helper/reducer';
import { productsReducer } from '@src/redux/products/reducer';

export const rootReducer = combineReducers<RootStateType>({
  auth: authReducer,
  helper: helperReducer,
  products: productsReducer,
});
