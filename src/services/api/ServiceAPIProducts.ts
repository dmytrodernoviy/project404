import { apiInstance, bodyRequest } from '@src/services/api/instanceAPI';
import { apiURLs } from '@src/constants';
import { ApiResponse } from 'apisauce';
import {
  TProductsResponse,
  TSearchableProductsData,
} from '@src/constants/commonTypes';

class Service {
  getProducts({ page = 1 }): Promise<ApiResponse<TProductsResponse>> {
    return apiInstance.post(apiURLs.getProducts, { ...bodyRequest, page });
  }
  searchProducts({
    payload = '',
  }): Promise<ApiResponse<TSearchableProductsData>> {
    return apiInstance.post(apiURLs.searchProducts, { search: payload });
  }
}

export const ServiceAPIProducts = new Service();
