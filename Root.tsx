import React, { useCallback, useEffect, useRef } from 'react';
import AppStack from '@src/navigation/AppStack';
import { DispatcherService, NavigationService } from '@src/services';
import { setI18nConfig } from '@src/translations';
import { SnackBarComponent } from '@src/components';
import { GoogleSignin } from '@react-native-community/google-signin';

const Root: React.FC = () => {
  const appStack = useRef(null);

  const setInitAppLanguage = useCallback((locale) => {
    DispatcherService.setAppLanguage(locale);
    DispatcherService.autoSignIn();
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '685881540446-h26b94vqcj29cbgaq1mfj6un0tb479vr.apps.googleusercontent.com',
    });
    NavigationService.setTopLevelNavigator(appStack.current);
    setI18nConfig(setInitAppLanguage);
  }, [setInitAppLanguage]);

  return (
    <>
      <AppStack ref={appStack} />
      <SnackBarComponent />
    </>
  );
};

export default Root;
