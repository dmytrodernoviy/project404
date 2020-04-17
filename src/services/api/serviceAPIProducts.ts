import { apiInstance, bodyRequest } from '@src/services/api/instanceAPI';
import { apiURLs } from '@src/constants';

class Service {
  getProducts({ page = 1 }) {
    return apiInstance.post(apiURLs.getProducts, { ...bodyRequest, page });
  }
  searchProducts({ payload = '' }) {
    return apiInstance.post(apiURLs.searchProducts, { search: payload });
  }
}

export const serviceAPIProducts = new Service();
