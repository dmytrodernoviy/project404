import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const ScreenHeader: React.FC<{
  placeholder: string;
}> = ({ placeholder }) => {
  return <View style={styles.container} />;
};

export default ScreenHeader;
