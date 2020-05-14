import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { colors, translationsConstants } from '@src/constants';
import { useSelector } from 'react-redux';
import { HelperSelector } from '@src/redux/helper/selectors';
import { translationString } from '@src/translations';

const LogoutButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  const locale = useSelector(HelperSelector.locale);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={styles.title}>
        {translationString(translationsConstants.logout, locale)}
      </Text>
      <Icon
        name={'exit-run'}
        color={colors.authMain}
        size={normalize(20, 'height')}
      />
    </TouchableOpacity>
  );
};

export default LogoutButton;
