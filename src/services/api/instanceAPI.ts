import { ApisauceInstance, create } from 'apisauce';
import { baseAPIURL } from '@src/constants/apiConsts';

export const apiInstance: ApisauceInstance = create({
  baseURL: baseAPIURL,
  timeout: 5000,
});

export const bodyRequest = {
  cat_id: 0,
  theme_id: 0,
  theme_pid: 0,
  page: 1,
  ipp: 10,
  sortby: 'popular',
  user_id: 0,
  aIds: [],
};
