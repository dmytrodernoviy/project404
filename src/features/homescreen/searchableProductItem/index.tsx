import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';

const SearchableProductItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon
        name={'ios-arrow-forward'}
        size={normalize(20, 'height')}
        color={colors.inactiveTab}
      />
    </View>
  );
};

export default SearchableProductItem;
