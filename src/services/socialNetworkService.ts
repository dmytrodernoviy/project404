import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import { consoleLog } from '@src/utils';
import { NavigationService, SecureStorageService } from '@src/services/index';
import { navigationStackNames } from '@src/constants';

class Service {
  facebookSignIn = async () => {
    try {
      const { error, isCancelled } = await LoginManager.logInWithPermissions([
        'public_profile',
      ]);
      if (error) {
        consoleLog('facebookLogin', error);
      } else if (isCancelled) {
        consoleLog('facebookLogin', 'Cancelled');
      } else {
        const userInfo = await AccessToken.getCurrentAccessToken();
        const token = userInfo?.accessToken;
        if (token) {
          this.signInSuccess(token);
        }
      }
    } catch (e) {
      consoleLog('facebookLogin', e);
    }
  };

  googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const token = userInfo?.idToken;
      if (token) {
        this.signInSuccess(token);
      }
      consoleLog('googleLogin', userInfo);
    } catch (error) {
      consoleLog('googleLoginError', error);
    }
  };

  signInSuccess = async (token: string) => {
    await SecureStorageService.setToken(token);
    NavigationService.navigate(navigationStackNames.TabStack);
  };
}

export const SocialNetworkService = new Service();
