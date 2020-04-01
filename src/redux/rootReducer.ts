import { combineReducers } from 'redux';
import { authReducer } from '@src/ducks/auth/reducer';

export const rootReducer = combineReducers({
  auth: authReducer
});
