import { call, put } from 'redux-saga/effects';
import { consoleLog, optimizeResponse } from '@src/utils';
import { serviceAPIProducts } from '@src/services';
import {
  GetProductsFailure,
  GetProductsSuccess,
  SearchProductFailure,
  SearchProductSuccess,
} from '@src/redux/products/actions';
import { ApiResponse } from 'apisauce';
import { TProductsResponse } from '@src/constants/commonTypes';

export function* getProductsSaga({ callback = (): void => {}, page = 1 }) {
  try {
    const response: ApiResponse<TProductsResponse> = yield call(
      serviceAPIProducts.getProducts,
      { page },
    );
    if (response.ok && response.data) {
      const optimizedResponse = optimizeResponse.getProducts(
        response.data.aCatProds,
      );
      yield put(GetProductsSuccess({ payload: optimizedResponse, page }));
      callback();
    }
  } catch (e) {
    yield put(GetProductsFailure());
    consoleLog('getProductsSaga', e);
  }
}

export function* searchProducts({ payload = '' }) {
  try {
    const response = yield call(serviceAPIProducts.searchProducts, {
      payload,
    });
    if (response.ok) {
      consoleLog('response', response);
      yield put(SearchProductSuccess({ payload: response.data.aPhrases }));
    }
  } catch (e) {
    yield put(SearchProductFailure());
    consoleLog('searchProductSaga', e);
  }
}
