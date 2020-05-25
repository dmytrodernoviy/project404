import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { colors } from '@src/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tabNavigatior,
  },
});

const DefaultScreen: React.FC = () => {
  return <View style={styles.container} />;
};

export default DefaultScreen;
