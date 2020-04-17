import { combineReducers } from 'redux';
import { authReducer } from '@src/redux/auth/reducer';
import { RootStateType } from '@src/redux/types';
import { currentLanguageReducer } from '@src/redux/translation/reducer';
import { productsReducer } from '@src/redux/products/reducer';

export const rootReducer = combineReducers<RootStateType>({
  auth: authReducer,
  locale: currentLanguageReducer,
  products: productsReducer,
});
