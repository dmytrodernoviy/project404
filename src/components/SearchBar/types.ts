import { RefObject } from 'react';
import { TextInput } from 'react-native';

export interface Props {
  isAnimatedFinished?: boolean;
  placeholder: string;
  searchInputRef: RefObject<TextInput>;
  onChangeText: (query: string) => void;
  onAnimationStart?: (toValue: number, callbackValue: boolean) => void;
}
