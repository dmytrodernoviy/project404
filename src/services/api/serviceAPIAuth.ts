import { SignInFormValuesType } from '@src/ducks/auth/types';
import { apiInstance } from '@src/services/api/instanceAPI';
import { apiURLs } from '@src/constants';

class Service {
  signIn(formValues: SignInFormValuesType) {
    return apiInstance.post(apiURLs.signIn, formValues);
  }
}

export const serviceAPIAuth = new Service();
