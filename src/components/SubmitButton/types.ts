import { Animated } from 'react-native';

export interface Props {
  label: string;
  positionRight?: boolean;
  scaleButtonValue: Animated.Value;
  scaleLoaderValue: Animated.Value;
  onSubmitPress: () => void;
}
