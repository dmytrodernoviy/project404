import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import normalize from 'react-native-normalize';

export const useProfileAnimation = (): {
  containerTranslate: Animated.Value;
  userPhotoTranslate: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
} => {
  const containerTranslate = useRef(
    new Animated.Value(-normalize(150, 'height')),
  ).current;

  useEffect(() => {
    Animated.timing(containerTranslate, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [containerTranslate]);

  const userPhotoTranslate = containerTranslate.interpolate({
    inputRange: [0, normalize(150, 'height')],
    outputRange: [0, normalize(150, 'height')],
  });

  const opacity = containerTranslate.interpolate({
    inputRange: [-normalize(150, 'height'), 0],
    outputRange: [0, 1],
  });

  return {
    containerTranslate,
    userPhotoTranslate,
    opacity,
  };
};
