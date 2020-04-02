import { create } from 'apisauce';
import { baseAPIURL } from '@src/constants/apiConsts';

export const apiInstance = create({
  baseURL: baseAPIURL,
  timeout: 10000,
});
