import React, { useCallback, useEffect } from 'react';
import AppStack from '@src/navigation/AppStack';
import { DispatcherService } from '@src/services';
import { setI18nConfig } from '@src/translations';
import { SnackBarComponent } from '@src/components';
import { GoogleSignin } from '@react-native-community/google-signin';

const Root: React.FC = () => {
  const setInitAppLanguage = useCallback((locale) => {
    DispatcherService.setAppLanguage(locale);
    DispatcherService.autoSignIn();
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '685881540446-h26b94vqcj29cbgaq1mfj6un0tb479vr.apps.googleusercontent.com',
    });
    setI18nConfig(setInitAppLanguage);
  }, [setInitAppLanguage]);

  return (
    <>
      <AppStack />
      <SnackBarComponent />
    </>
  );
};

export default Root;
