import { AuthReducerType } from '@src/redux/auth/types';
import { CurrentLanguageReducerType } from '@src/redux/translation/types';

export interface RootStateType {
  auth: AuthReducerType;
  locale: CurrentLanguageReducerType;
}
