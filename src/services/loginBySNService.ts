import { LoginManager } from 'react-native-fbsdk';
import { consoleLog } from '@src/utils';

class Service {
  async facebook() {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
      ]);
      consoleLog('facebookLogin', result);
    } catch (e) {
      consoleLog('facebookLogin', e);
    }
  }
}

export const LoginBySNService = new Service();
