import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import { AuthSelectors } from '@src/redux/auth/selectors';
import { NavigationService } from '@src/services';
import { navigationStackNames } from '@src/constants';

const LoginAnimatedLayout: React.FC = () => {
  const scale = useRef(new Animated.Value(0)).current;
  const isAnimationStart = useSelector(AuthSelectors.isAnimationLoginLayout);
  const opacity = useRef(new Animated.Value(1)).current;

  console.log(isAnimationStart);
  useEffect(() => {
    if (isAnimationStart) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        NavigationService.navigate(navigationStackNames.TabStack);
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [scale, isAnimationStart, opacity]);

  return (
    <Animated.View
      style={{ ...styles.container, transform: [{ scale }], opacity }}
    />
  );
};

export default LoginAnimatedLayout;
