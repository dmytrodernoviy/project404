import { Alert } from 'react-native';

export const showErrorsByAlert = (message: string): void => {
  Alert.alert(message);
};
