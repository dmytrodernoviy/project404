import {
  GetProductsConstants,
  GetProductsType,
  ProductsReducerType,
} from '@src/redux/products/types';

const initialState: ProductsReducerType = {
  products: [],
  searchableProducts: [],
  isSearchLoading: false,
  isRefreshing: false,
  isLoadingMore: false,
};

export const productsReducer = (
  state = initialState,
  action: GetProductsType,
): ProductsReducerType => {
  switch (action.type) {
    case GetProductsConstants.GET_PRODUCTS_REQUEST:
      if ('page' in action && action.page === 1) {
        return {
          ...state,
          isRefreshing: true,
        };
      } else {
        return {
          ...state,
          isLoadingMore: true,
        };
      }
    case GetProductsConstants.GET_PRODUCTS_SUCCESS:
      if ('page' in action && action.page === 1) {
        return {
          ...state,
          isRefreshing: false,
          products: 'payload' in action ? action.payload : [],
        };
      } else {
        return {
          ...state,
          isLoadingMore: false,
          products: [...state.products, ...action.payload],
        };
      }

    case GetProductsConstants.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isRefreshing: false,
        isLoadingMore: false,
      };
    case GetProductsConstants.SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isSearchLoading: true,
      };
    case GetProductsConstants.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isSearchLoading: false,
        searchableProducts: action.payload,
      };
    case GetProductsConstants.SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isSearchLoading: false,
      };
    case GetProductsConstants.CLEAR_SEARCHABLE_PRODUCTS:
      return {
        ...state,
        searchableProducts: [],
      };
    default:
      return state;
  }
};
