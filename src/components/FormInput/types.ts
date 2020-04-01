import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export interface Props {
  type: 'email' | 'login' | 'password';
  placeholder: string;
  value: string;
  error: string | undefined;
  onChangeText: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData> | string) => void;
  touched: boolean | undefined;
}
