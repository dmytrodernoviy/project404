import React, { useEffect, useRef } from 'react';
import {
  Text,
  ActivityIndicator,
  Animated,
  View,
  TouchableOpacity,
  Easing,
} from 'react-native';
import styles from '@src/components/SubmitButton/styles';
import { colors, navigationStackNames } from '@src/constants';
import { useSelector } from 'react-redux';
import { AuthSelectors } from '@src/redux/auth/selectors';
import { DispatcherService, NavigationService } from '@src/services';

interface TProps {
  label: string;
  scaleButtonValue: Animated.Value;
  scaleLoaderValue: Animated.Value;
  onSubmitPress: () => void;
}

const SubmitButton: React.FC<TProps> = ({
  label,
  onSubmitPress,
  scaleLoaderValue,
  scaleButtonValue,
}) => {
  const scale = useRef(new Animated.Value(0)).current;
  const isAnimationStart = useSelector(AuthSelectors.isAnimationLoginLayout);

  useEffect(() => {
    if (isAnimationStart) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start(() => {
        NavigationService.navigate(navigationStackNames.TabStack);
        DispatcherService.isAnimationLoginLayout(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimationStart]);

  return (
    <View style={[styles.buttonContainer]}>
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
            <ActivityIndicator color={colors.authMain} />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {isAnimationStart && (
        <Animated.View
          style={{ ...styles.coverageLayout, transform: [{ scale }] }}
        />
      )}
    </View>
  );
};

export default SubmitButton;
