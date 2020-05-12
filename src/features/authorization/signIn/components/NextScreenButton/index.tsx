import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Props } from '@src/features/authorization/signIn/components/NextScreenButton/types';
import styles from '@src/features/authorization/signIn/components/NextScreenButton/styles';
import { useSelector } from 'react-redux';
import { HelperSelector } from '@src/redux/helper/selectors';
import { translationString } from '@src/translations';
import { translationsConstants } from '@src/constants';

const NextScreenButton: React.FC<Props> = ({ onPress, isRegisterScreen }) => {
  const locale = useSelector(HelperSelector.locale);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {translationString(
          !isRegisterScreen
            ? translationsConstants["don't_have_account"]
            : translationsConstants.have_you_got_account,
          locale,
        ).toUpperCase()}{' '}
      </Text>
      <TouchableOpacity onPress={(): void => onPress()}>
        <Text style={styles.signUp}>
          {translationString(
            !isRegisterScreen
              ? translationsConstants.sign_up
              : translationsConstants.sign_in,
            locale,
          ).toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextScreenButton;
