import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { screenWidth } from '@src/utils/helpers';

export const useProfileOptionsAnimation = ({ index }: { index: number }) => {
  const itemTranslate = useRef(new Animated.Value(-screenWidth)).current;

  useEffect(() => {
    Animated.timing(itemTranslate, {
      toValue: 0,
      duration: 500,
      delay: (index + 1) * 200,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemTranslate]);

  const opacity = itemTranslate.interpolate({
    inputRange: [-screenWidth, 0],
    outputRange: [0, 1],
  });

  return {
    itemTranslate,
    opacity,
  };
};
