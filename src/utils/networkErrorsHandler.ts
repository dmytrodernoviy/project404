import { ApiErrorResponse } from 'apisauce';
import { Alert } from 'react-native';
import { TApiResponseData } from '@src/constants/commonTypes';
import { translationsConstants } from '@src/constants';
import { DispatcherService } from '@src/services';

export const networkErrorsHandler = (
  error: ApiErrorResponse<TApiResponseData>,
): void => {
  switch (error.problem) {
    case 'NETWORK_ERROR':
      DispatcherService.toggleSnackBar(translationsConstants.connection_lost);
      break;
    case 'TIMEOUT_ERROR':
    case 'CONNECTION_ERROR':
      DispatcherService.toggleSnackBar(
        translationsConstants.something_went_wrong,
      );
      break;
    case 'CLIENT_ERROR':
      const msg = error.data ? error.data.msg : '';
      Alert.alert(msg);
      break;
    default:
      return;
  }
};
