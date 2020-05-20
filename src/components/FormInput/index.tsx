import React from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import normalize from 'react-native-normalize';
import styles from './styles';
import { colors } from '@src/constants';

interface TProps {
  type: 'email' | 'login' | 'password';
  placeholder: string;
  value: string;
  error: string | undefined;
  onChangeText: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData> | string) => void;
  touched: boolean | undefined;
}

const FormInput: React.FC<TProps> = ({
  type,
  placeholder,
  onBlur,
  onChangeText,
  value,
  error,
  touched,
}) => {
  let iconType = '';

  switch (type) {
    case 'email':
      iconType = 'email';
      break;
    case 'password':
      iconType = 'locked';
      break;
    default:
      iconType = '';
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={type === 'password'}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          placeholder={placeholder}
          placeholderTextColor={colors.authMain}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        />
        <Icon
          name={iconType}
          size={normalize(30)}
          color={error && touched ? colors.error : colors.authMain}
          style={styles.icon}
        />
      </View>
      <View style={styles.errorView}>
        {touched && <Text style={styles.error}>{error && error}</Text>}
      </View>
    </>
  );
};

export default FormInput;
