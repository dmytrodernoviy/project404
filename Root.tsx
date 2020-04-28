import React, { useCallback, useEffect, useRef } from 'react';
import AppStack from '@src/navigation/AppStack';
import { DispatcherService, NavigationService } from '@src/services';
import { setI18nConfig } from '@src/translations';
import { useDispatch, useSelector } from 'react-redux';
import { SnackBarComponent } from '@src/components';
import { HelperSelector } from '@src/redux/helper/selectors';

const Root: React.FC = () => {
  const appStack = useRef(null);
  const dispatch = useDispatch();
  const snackBarTitle = useSelector(HelperSelector.snackBarTitle);

  const setInitAppLanguage = useCallback(
    (locale) => {
      DispatcherService.setAppLanguage(dispatch, locale);
      DispatcherService.autoSignIn(dispatch);
    },
    [dispatch],
  );

  useEffect(() => {
    NavigationService.setTopLevelNavigator(appStack.current);
    setI18nConfig(setInitAppLanguage);
  }, [setInitAppLanguage]);

  return (
    <>
      <AppStack ref={appStack} />
      <SnackBarComponent snackBarTitle={snackBarTitle} />
    </>
  );
};

export default Root;
