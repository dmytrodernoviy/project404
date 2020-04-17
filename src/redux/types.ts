import { AuthReducerType } from '@src/redux/auth/types';
import { CurrentLanguageReducerType } from '@src/redux/translation/types';
import { ProductsReducerType } from '@src/redux/products/types';

export interface RootStateType {
  auth: AuthReducerType;
  locale: CurrentLanguageReducerType;
  products: ProductsReducerType;
}
