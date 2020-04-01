import React, { useEffect, useRef } from 'react';
import AppStack from '@src/navigation/AppStack';
import { NavigationService } from '@src/services';

const Root = () => {
  const appStack = useRef(null);
  useEffect(() => {
    NavigationService.setTopLevelNavigator(appStack.current);
  }, []);

  return <AppStack ref={appStack} />;
};

export default Root;
