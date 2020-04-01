import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import styles from './styles';
import { colors } from '@src/constants';
import { Props } from '@src/components/FormInput/types';

const FormInput: React.FC<Props> = ({
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
      iconType = 'ios-mail';
      break;
    case 'password':
      iconType = 'ios-key';
      break;
    case 'login':
      iconType = 'ios-contact';
      break;
    default:
      iconType = '';
  }

  return (
    <View>
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
          size={normalize(35)}
          color={error && touched ? colors.error : colors.authMain}
          style={type === 'password' && styles.rotate}
        />
      </View>
      <View style={styles.errorView}>
        {touched && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default FormInput;
