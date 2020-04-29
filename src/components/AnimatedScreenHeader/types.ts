import { Animated, TextInput } from 'react-native';
import { RefObject } from 'react';

export interface Props {
  placeholder: string;
  isAnimatedFinished: boolean;
  locale: string;
  searchInputRef: RefObject<TextInput>;
  height: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
  titleTranslate: Animated.AnimatedInterpolation;
  searchBarTranslate: Animated.AnimatedInterpolation;
  searchInputOpacity: Animated.AnimatedInterpolation;
  onSearchProduct: (query: string) => void;
  toggleSearch: (toValue: number, callbackValue: boolean) => void;
}
