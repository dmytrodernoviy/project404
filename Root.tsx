import React, { useCallback, useEffect, useRef } from 'react';
import AppStack from '@src/navigation/AppStack';
import SplashScreen from 'react-native-splash-screen';
import { DispatcherService, NavigationService } from '@src/services';
import { setI18nConfig } from '@src/translations';
import { useDispatch } from 'react-redux';

const Root: React.FC = () => {
  const appStack = useRef(null);
  const dispatch = useDispatch();

  const setInitAppLanguage = useCallback(
    (locale) => {
      DispatcherService.setAppLanguage(dispatch, locale);
      SplashScreen.hide();
    },
    [dispatch],
  );

  useEffect(() => {
    NavigationService.setTopLevelNavigator(appStack.current);
    setI18nConfig(setInitAppLanguage);
  }, [setInitAppLanguage]);

  return <AppStack ref={appStack} />;
};

export default Root;
