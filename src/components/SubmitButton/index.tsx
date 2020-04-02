import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Props } from '@src/components/SubmitButton/types';
import styles from '@src/components/SubmitButton/styles';
import { colors } from '@src/constants';

const SubmitButton: React.FC<Props> = ({
  label,
  onPress,
  isLoading,
  positionRight,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, positionRight && styles.positionRight]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={colors.authAdd} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default SubmitButton;
