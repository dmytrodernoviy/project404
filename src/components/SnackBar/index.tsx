import React, { useEffect } from 'react';
import SnackBar from 'react-native-snackbar-component';
import { translationString } from '@src/translations';
import { colors } from '@src/constants';
import styles from './styles';
import { useSelector } from 'react-redux';
import { HelperSelector } from '@src/redux/helper/selectors';
import { DispatcherService } from '@src/services';

const SnackBarComponent: React.FC = () => {
  const locale = useSelector(HelperSelector.locale);
  const { isVisible, title } = useSelector(HelperSelector.snackBarOptions);
  const snackBarDelay = 2000;

  useEffect(() => {
    if (title) {
      setTimeout(() => {
        DispatcherService.toggleSnackBar({ isVisible: false });
      }, snackBarDelay);
    }
  }, [title]);

  return (
    <SnackBar
      visible={isVisible}
      textMessage={`${translationString(title, locale)}  \u26A0`}
      position="top"
      backgroundColor={colors.error}
      messageStyle={styles.message}
      containerStyle={styles.container}
    />
  );
};

export default SnackBarComponent;
