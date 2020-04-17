import { takeEvery } from 'redux-saga/effects';
import { signInSaga, signUpSaga } from '@src/sagas/authSaga';
import { consoleLog } from '@src/utils';
import { AuthActionsConstants } from '@src/redux/auth/types';
import { GetProductsConstants } from '@src/redux/products/types';
import { getProductsSaga, searchProducts } from '@src/sagas/productsSaga';

export default function* rootSaga() {
  try {
    yield takeEvery(AuthActionsConstants.SIGN_IN_REQUEST, signInSaga);
    yield takeEvery(AuthActionsConstants.SIGN_UP_REQUEST, signUpSaga);

    yield takeEvery(GetProductsConstants.GET_PRODUCTS_REQUEST, getProductsSaga);
    yield takeEvery(
      GetProductsConstants.SEARCH_PRODUCTS_REQUEST,
      searchProducts,
    );
  } catch (e) {
    consoleLog('rootSagaError', e);
  }
}
