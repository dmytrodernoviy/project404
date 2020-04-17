import React from 'react';
import Spinner from 'react-native-spinkit';
import { View, ViewStyle } from 'react-native';
import styles from './styles';
import { colors } from '@src/constants';

const ActivitySpinner: React.FC<{
  isLoading: boolean;
  containerStyle?: ViewStyle;
  spinnerSize: number;
}> = ({ isLoading, containerStyle, spinnerSize }) => {
  return (
    <>
      {isLoading && (
        <View style={[styles.container, containerStyle]}>
          <Spinner
            size={spinnerSize}
            type={'FadingCircleAlt'}
            color={colors.activeTab}
          />
        </View>
      )}
    </>
  );
};

export default ActivitySpinner;
