import {
  SignInFormValuesType,
  SignUpFormValuesType,
} from '@src/redux/auth/types';
import { apiInstance } from '@src/services/api/instanceAPI';
import { apiURLs } from '@src/constants';
import { ApiResponse } from 'apisauce';
import { TSignInResponse, TSignUpResponse } from '@src/constants/commonTypes';

class Service {
  signIn(
    formValues: SignInFormValuesType,
  ): Promise<ApiResponse<TSignInResponse>> {
    return apiInstance.post(apiURLs.signIn, formValues);
  }

  signUp(
    formValues: SignUpFormValuesType,
  ): Promise<ApiResponse<TSignUpResponse>> {
    return apiInstance.post(apiURLs.signUp, formValues);
  }

  setTokenToHeaders(token: string): void {
    apiInstance.setHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    });
  }
}

export const ServiceAPIAuth = new Service();
