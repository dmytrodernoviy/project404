import {
  GetProductsConstants,
  GetProductsType,
} from '@src/redux/products/types';
import { TProductItem } from '@src/constants/commonTypes';

export const GetProductsRequest = ({
  callback = (): void => {},
  page = 1,
}: {
  callback?: () => void;
  page: number;
}): GetProductsType => ({
  type: GetProductsConstants.GET_PRODUCTS_REQUEST,
  page,
  callback,
});

export const GetProductsSuccess = ({
  payload,
  page,
}: {
  payload: Array<TProductItem>;
  page: number;
}): GetProductsType => ({
  type: GetProductsConstants.GET_PRODUCTS_SUCCESS,
  payload,
  page,
});

export const GetProductsFailure = (): GetProductsType => ({
  type: GetProductsConstants.GET_PRODUCTS_FAILURE,
});

export const SearchProductRequest = ({
  payload,
}: {
  payload: string;
}): GetProductsType => ({
  type: GetProductsConstants.SEARCH_PRODUCTS_REQUEST,
  payload,
});

export const SearchProductSuccess = ({
  payload,
}: {
  payload: Array<string>;
}): GetProductsType => ({
  type: GetProductsConstants.SEARCH_PRODUCTS_SUCCESS,
  payload,
});

export const SearchProductFailure = (): GetProductsType => ({
  type: GetProductsConstants.SEARCH_PRODUCTS_FAILURE,
});

export const ClearSearchableProducts = (): GetProductsType => ({
  type: GetProductsConstants.CLEAR_SEARCHABLE_PRODUCTS,
});
