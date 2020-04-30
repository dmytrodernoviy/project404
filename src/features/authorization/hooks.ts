import { useCallback, useRef, useState } from 'react';
import { Animated, Keyboard } from 'react-native';
import { DispatcherService } from '@src/services';

export const useAnimationButtonAndRequest = (
  requestType: 'signIn' | 'signUp',
) => {
  const scaleButtonValue = useRef(new Animated.Value(1)).current;
  const scaleLoaderValue = useRef(new Animated.Value(0)).current;
  const [isDisabled, setIsDisabled] = useState(false);

  const onToggleAnimation = useCallback(
    ({
      animatedValue,
      toValue,
      animationType,
    }: {
      animatedValue: Animated.Value;
      toValue: number;
      animationType?: 'startAnimation' | 'revertAnimation';
    }): void => {
      Animated.timing(animatedValue, {
        toValue,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        setIsDisabled(!isDisabled);
        if (animationType === 'startAnimation') {
          onToggleAnimation({
            animatedValue: scaleLoaderValue,
            toValue: 1,
          });
        } else if (animationType === 'revertAnimation') {
          onToggleAnimation({
            animatedValue: scaleButtonValue,
            toValue: 1,
          });
        }
      });
    },
    [isDisabled, scaleButtonValue, scaleLoaderValue],
  );

  const onSubmit = useCallback(
    (values) => {
      onToggleAnimation({
        animatedValue: scaleButtonValue,
        toValue: 0,
        animationType: 'startAnimation',
      });
      Keyboard.dismiss();
      setTimeout(() => {
        DispatcherService[requestType]({
          payload: values,
          callback: () => {
            onToggleAnimation({
              animatedValue: scaleLoaderValue,
              toValue: 0,
              animationType: 'revertAnimation',
            });
          },
        });
      }, 700);
    },
    [onToggleAnimation, scaleButtonValue, scaleLoaderValue, requestType],
  );

  return {
    scaleLoaderValue,
    scaleButtonValue,
    onSubmit,
  };
};
