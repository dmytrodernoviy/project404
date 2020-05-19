import { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import normalize from 'react-native-normalize';

export const useLanguagePickerAnimation = (
  index: number,
  pickerState: string,
): {
  itemTranslate: Animated.Value;
  opacity: Animated.AnimatedInterpolation;
} => {
  const value =
    index === 0
      ? -normalize(45, 'height')
      : -(normalize(45, 'height') + normalize(30, 'height') * index);
  const itemTranslate = useRef(new Animated.Value(value)).current;

  const togglePicker = useCallback(
    (toValue: number) => {
      Animated.timing(itemTranslate, {
        toValue,
        duration: 500,
        useNativeDriver: true,
      }).start();
    },
    [itemTranslate],
  );

  useEffect((): void => {
    if (pickerState === 'open') {
      togglePicker(0);
    } else {
      togglePicker(value);
    }
  }, [pickerState, value, togglePicker]);

  const opacity = itemTranslate.interpolate({
    inputRange: [-normalize(45, 'height'), 0],
    outputRange: [0, 1],
  });

  return {
    itemTranslate,
    opacity,
  };
};
