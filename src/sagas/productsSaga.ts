import { call, put } from 'redux-saga/effects';
import { consoleLog, networkErrorsHandler, optimizeResponse } from '@src/utils';
import { serviceAPIProducts } from '@src/services';
import {
  GetProductsFailure,
  GetProductsSuccess,
  SearchProductFailure,
  SearchProductSuccess,
} from '@src/redux/products/actions';
import { ApiResponse } from 'apisauce';
import { TProductsResponse } from '@src/constants/commonTypes';
import { AnyAction } from 'redux';

export function* getProductsSaga({
  callback = (): void => {},
  page = 1,
}: AnyAction) {
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

export function* searchProducts({ payload = '' }: AnyAction) {
  try {
    const response = yield call(serviceAPIProducts.searchProducts, {
      payload,
    });
    if (response.ok) {
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
