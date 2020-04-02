import React, { useEffect, useRef } from 'react';
import AppStack from '@src/navigation/AppStack';
import SplashScreen from 'react-native-splash-screen';
import { NavigationService } from '@src/services';

const Root: React.FC = () => {
  const appStack = useRef(null);
  useEffect(() => {
    NavigationService.setTopLevelNavigator(appStack.current);
    SplashScreen.hide();
  }, []);

  return <AppStack ref={appStack} />;
};

export default Root;
