import { call, put } from 'redux-saga/effects';
import { consoleLog, networkErrorsHandler, optimizeResponse } from '@src/utils';
import { ServiceAPIProducts } from '@src/services';
import {
  GetProductsFailure,
  GetProductsSuccess,
  SearchProductFailure,
  SearchProductSuccess,
} from '@src/redux/products/actions';
import { ApiResponse } from 'apisauce';
import {
  TProductsResponse,
  TSearchableProductsData,
} from '@src/constants/commonTypes';
import {
  GetProductsRequest,
  SearchProductRequest,
} from '@src/redux/products/types';

export function* getProductsSaga({
  callback = (): void => {},
  page,
}: GetProductsRequest) {
  try {
    const response: ApiResponse<TProductsResponse> = yield call(
      ServiceAPIProducts.getProducts,
      { page },
    );
    if (response.ok && response.data) {
      const optimizedResponse = optimizeResponse.getProducts(
        response.data.aCatProds,
      );
      yield put(GetProductsSuccess({ payload: optimizedResponse, page }));
      callback();
    } else {
      callback();
      throw response;
    }
  } catch (e) {
    yield put(GetProductsFailure());
    networkErrorsHandler(e);
    consoleLog('getProductSaga', e);
  }
}

export function* searchProducts({ payload }: SearchProductRequest) {
  try {
    const response: ApiResponse<TSearchableProductsData> = yield call(
      ServiceAPIProducts.searchProducts,
      {
        payload,
      },
    );
    consoleLog('search', response);
    if (response.ok && response.data) {
      yield put(SearchProductSuccess({ payload: response.data.aPhrases }));
    } else {
      throw response;
    }
  } catch (e) {
    yield put(SearchProductFailure());
    networkErrorsHandler(e);
    consoleLog('searchProductSaga', e);
  }
}
