import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SearchBar } from '@src/components';

const ScreenHeader: React.FC<{
  placeholder: string;
}> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <SearchBar placeholder={placeholder} onChangeText={() => {}} />
    </View>
  );
};

export default ScreenHeader;
