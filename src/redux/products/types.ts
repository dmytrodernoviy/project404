import { TProductItem } from '@src/constants/commonTypes';

export const GetProductsConstants = {
  GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',
  SEARCH_PRODUCTS_REQUEST: 'SEARCH_PRODUCTS_REQUEST',
  SEARCH_PRODUCTS_SUCCESS: 'SEARCH_PRODUCTS_SUCCESS',
  SEARCH_PRODUCTS_FAILURE: 'SEARCH_PRODUCTS_FAILURE',
  CLEAR_SEARCHABLE_PRODUCTS: 'CLEAR_SEARCHABLE_PRODUCTS',
};

//Types for Reducer
export interface ProductsReducerType {
  products: Array<TProductItem>;
  searchableProducts: Array<string>;
  isSearchLoading: boolean;
  isRefreshing: boolean;
  isLoadingMore: boolean;
}

interface GetProductsRequest {
  type: typeof GetProductsConstants.GET_PRODUCTS_REQUEST;
  page: number;
  callback?: () => void;
}

interface GetProductsSuccess {
  type: typeof GetProductsConstants.GET_PRODUCTS_SUCCESS;
  page: number;
  payload: Array<TProductItem>;
}

interface GetProductsFailure {
  type: typeof GetProductsConstants.GET_PRODUCTS_FAILURE;
}

interface SearchProductRequest {
  type: typeof GetProductsConstants.SEARCH_PRODUCTS_REQUEST;
  payload: string;
}

interface SearchProductSuccess {
  type: typeof GetProductsConstants.SEARCH_PRODUCTS_SUCCESS;
  payload: Array<TProductItem>;
}

interface SearchProductFailure {
  type: typeof GetProductsConstants.SEARCH_PRODUCTS_FAILURE;
}

interface ClearSearchableProducts {
  type: typeof GetProductsConstants.CLEAR_SEARCHABLE_PRODUCTS;
}

export type GetProductsType =
  | GetProductsRequest
  | GetProductsSuccess
  | GetProductsFailure
  | SearchProductRequest
  | SearchProductSuccess
  | SearchProductFailure
  | ClearSearchableProducts;
