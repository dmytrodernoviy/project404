import { consoleLog } from '@src/utils';
import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';

class Service {
  async setToken(token: string): Promise<any> {
    try {
      await RNSecureKeyStore.set('token', token, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      });
    } catch (e) {
      consoleLog('setToken secureStorage error', e);
    }
  }

  getToken = async (): Promise<string | undefined> => {
    try {
      return await RNSecureKeyStore.get('token');
    } catch (e) {
      consoleLog('getToken secureStorage error', e);
    }
  };

  async removeToken(): Promise<any> {
    try {
      await RNSecureKeyStore.remove('token');
    } catch (e) {
      consoleLog('removeToken secureStorage error', e);
    }
  }
}

export const SecureStorageService = new Service();
