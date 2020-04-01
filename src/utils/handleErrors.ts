import { Alert } from 'react-native';

export const showErrorsByAlert = (message: string) => {
  Alert.alert(message);
};
