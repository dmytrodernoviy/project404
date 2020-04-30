import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  ActivityIndicator,
  Animated,
  View,
  TouchableOpacity,
} from 'react-native';
import { Props } from '@src/components/SubmitButton/types';
import styles from '@src/components/SubmitButton/styles';
import { colors } from '@src/constants';

const SubmitButton: React.FC<Props> = ({
  label,
  onSubmitPress,
  scaleLoaderValue,
  scaleButtonValue,
  positionRight,
}) => {
  return (
    <View
      style={[styles.buttonContainer, positionRight && styles.positionRight]}>
      <TouchableOpacity onPress={onSubmitPress}>
        <View>
          <Animated.View
            style={{
              ...styles.container,
              transform: [{ scale: scaleButtonValue }],
            }}>
            <Text style={styles.label}>{label}</Text>
          </Animated.View>
          <Animated.View
            style={{
              ...styles.loader,
              transform: [{ scale: scaleLoaderValue }],
            }}>
            <ActivityIndicator color={colors.authAdd} />
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
