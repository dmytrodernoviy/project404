import { Animated } from 'react-native';

export interface Props {
  label: string;
  scaleButtonValue: Animated.Value;
  scaleLoaderValue: Animated.Value;
  onSubmitPress: () => void;
}
