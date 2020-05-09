import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import normalize from 'react-native-normalize';
import styles from './styles';
import { colors } from '@src/constants';
import { SocialNetworkService } from '@src/services';

const SocialButton: React.FC = () => {
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
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.icon}
          style={[styles.buttonContainer, button.styles]}
          onPress={button.onPress}>
          <Icon name={button.icon} size={normalize(30)} color={colors.white} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SocialButton;
