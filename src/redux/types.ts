import { AuthReducerType } from '@src/redux/auth/types';
import { HelperReducerType } from '@src/redux/helper/types';
import { ProductsReducerType } from '@src/redux/products/types';

export interface RootStateType {
  auth: AuthReducerType;
  helper: HelperReducerType;
  products: ProductsReducerType;
}
