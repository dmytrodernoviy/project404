import React, { useEffect } from 'react';
import SnackBar from 'react-native-snackbar-component';
import { translationString } from '@src/translations';
import { colors } from '@src/constants';
import styles from './styles';
import { useSelector } from 'react-redux';
import { HelperSelector } from '@src/redux/helper/selectors';
import { DispatcherService } from '@src/services';

const SnackBarComponent: React.FC<{ snackBarTitle: string }> = ({
  snackBarTitle,
}) => {
  const locale = useSelector(HelperSelector.locale);
  const snackBarDelay = 2000;

  useEffect(() => {
    if (snackBarTitle) {
      setTimeout(() => {
        DispatcherService.toggleSnackBar('');
      }, snackBarDelay);
    }
  }, [snackBarTitle]);

  return (
    <SnackBar
      visible={!!snackBarTitle}
      textMessage={`${translationString(snackBarTitle, locale)}  \u26A0`}
      position="top"
      backgroundColor={colors.error}
      messageStyle={styles.message}
      containerStyle={styles.container}
    />
  );
};

export default SnackBarComponent;
