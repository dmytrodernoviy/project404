import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import { Props } from '@src/features/authorization/signIn/components/NextScreenButton/types';
import styles from '@src/features/authorization/signIn/components/NextScreenButton/styles';
import { colors } from '@src/constants';

const NextScreenButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name="ios-arrow-round-forward"
          size={normalize(50)}
          color={colors.authAdd}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NextScreenButton;
