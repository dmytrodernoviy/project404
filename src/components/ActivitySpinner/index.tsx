import React from 'react';
import Spinner from 'react-native-spinkit';
import { View, ViewStyle } from 'react-native';
import styles from './styles';
import { colors } from '@src/constants';

interface TProps {
  isLoading: boolean;
  containerStyle?: ViewStyle;
  spinnerSize: number;
}

const ActivitySpinner: React.FC<TProps> = ({
  isLoading,
  containerStyle,
  spinnerSize,
}) => {
  return (
    <>
      {isLoading && (
        <View style={[styles.container, containerStyle]}>
          <Spinner
            size={spinnerSize}
            type={'FadingCircleAlt'}
            color={colors.authMain}
          />
        </View>
      )}
    </>
  );
};

export default ActivitySpinner;
