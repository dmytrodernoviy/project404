import { combineReducers } from 'redux';
import { authReducer } from '@src/redux/auth/reducer';
import { RootStateType } from '@src/redux/types';

export const rootReducer = combineReducers<RootStateType>({
  auth: authReducer,
});
