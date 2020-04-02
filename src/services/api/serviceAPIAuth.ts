import {
  SignInFormValuesType,
  SignUpFormValuesType,
} from '@src/redux/auth/types';
import { apiInstance } from '@src/services/api/instanceAPI';
import { apiURLs } from '@src/constants';

class Service {
  signIn(formValues: SignInFormValuesType) {
    return apiInstance.post(apiURLs.signIn, formValues);
  }

  signUp(formValues: SignUpFormValuesType) {
    return apiInstance.post(apiURLs.signUp, formValues);
  }
}

export const serviceAPIAuth = new Service();
