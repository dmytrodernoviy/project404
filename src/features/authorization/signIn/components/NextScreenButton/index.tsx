import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import { Props } from '@src/features/authorization/signIn/components/NextScreenButton/types';
import styles from '@src/features/authorization/signIn/components/NextScreenButton/styles';
import { colors, screenNames } from '@src/constants';
import { NavigationService } from '@src/services';

const NextScreenButton: React.FC<Props> = ({ routeName }) => {
  let iconType = '';

  switch (routeName) {
    case screenNames.SignUpScreen:
      iconType = 'ios-arrow-round-forward';
      break;
    case screenNames.SignInScreen:
      iconType = 'ios-arrow-round-back';
      break;
    default:
      iconType = '';
  }

  return (
    <TouchableOpacity
      onPress={(): void => {
        NavigationService.navigate(routeName);
      }}>
      <View
        style={[
          styles.container,
          routeName === screenNames.SignInScreen && styles.rightPosition,
        ]}>
        <Icon name={iconType} size={normalize(50)} color={colors.authAdd} />
      </View>
    </TouchableOpacity>
  );
};

export default NextScreenButton;
