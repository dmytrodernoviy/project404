import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import normalize from 'react-native-normalize';
import styles from './styles';
import { colors, translationsConstants } from '@src/constants';
import { SocialNetworkService } from '@src/services';
import { useSelector } from 'react-redux';
import { HelperSelector } from '@src/redux/helper/selectors';
import { translationString } from '@src/translations';

const SocialButton: React.FC = () => {
  const locale = useSelector(HelperSelector.locale);
  const buttons = [
    {
      icon: 'google',
      styles: styles.google,
      onPress: SocialNetworkService.googleSignIn,
    },
    {
      icon: 'facebook',
      styles: styles.facebook,
      onPress: SocialNetworkService.facebookSignIn,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.hairLineContainer}>
        <View style={styles.hairLine} />
        <Text style={styles.label}>
          {translationString(translationsConstants.or, locale).toUpperCase()}
        </Text>
        <View style={styles.hairLine} />
      </View>
      <View style={styles.containerButton}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.icon}
            style={[styles.buttonContainer, button.styles]}
            onPress={button.onPress}>
            <Icon
              name={button.icon}
              size={normalize(30)}
              color={colors.white}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SocialButton;
