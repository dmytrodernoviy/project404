import { RefObject } from 'react';
import { Animated, TextInput } from 'react-native';

export interface Props {
  isAnimatedFinished?: boolean;
  placeholder: string;
  searchInputRef: RefObject<TextInput>;
  searchInputOpacity: Animated.AnimatedInterpolation;
  onChangeText: (query: string) => void;
  onAnimationStart?: (toValue: number, callbackValue: boolean) => void;
}
