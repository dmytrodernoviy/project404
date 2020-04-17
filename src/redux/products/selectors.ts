import { RootStateType } from '@src/redux/types';
import { TProductItem } from '@src/constants/commonTypes';

export const ProductsSelectors = {
  products: (state: RootStateType): Array<TProductItem> =>
    state.products.products,
  isRefreshing: (state: RootStateType): boolean => state.products.isRefreshing,
  isLoadingMore: (state: RootStateType): boolean =>
    state.products.isLoadingMore,
  searchableProducts: (state: RootStateType): Array<string> =>
    state.products.searchableProducts,
};
