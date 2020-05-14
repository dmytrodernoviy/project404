import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useProductItemAnimation = ({ index }: { index: number }) => {
  const itemScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(itemScale, {
      toValue: 1,
      duration: 300,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemScale]);

  const opacity = itemScale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return {
    itemScale,
    opacity,
  };
};
