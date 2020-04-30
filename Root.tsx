import React, { useCallback, useEffect, useRef } from 'react';
import AppStack from '@src/navigation/AppStack';
import { DispatcherService, NavigationService } from '@src/services';
import { setI18nConfig } from '@src/translations';
import { LoginAnimatedLayout, SnackBarComponent } from '@src/components';
import SplashScreen from 'react-native-splash-screen';

const Root: React.FC = () => {
  const appStack = useRef(null);

  const setInitAppLanguage = useCallback((locale) => {
    DispatcherService.setAppLanguage(locale);
    // DispatcherService.autoSignIn();
  }, []);

  useEffect(() => {
    NavigationService.setTopLevelNavigator(appStack.current);
    setI18nConfig(setInitAppLanguage);
    SplashScreen.hide();
  }, [setInitAppLanguage]);

  return (
    <>
      <AppStack ref={appStack} />
      <SnackBarComponent />
      <LoginAnimatedLayout />
    </>
  );
};

export default Root;
