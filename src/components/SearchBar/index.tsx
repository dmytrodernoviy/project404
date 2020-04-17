import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import styles from './styles';
import { Props } from './types';
import { colors } from '@src/constants';

const SearchBar: React.FC<Props> = ({
  placeholder,
  searchInputRef,
  onChangeText,
  isAnimatedFinished,
  onAnimationStart,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={(): void => {
          onAnimationStart && onAnimationStart(0, true);
        }}
        disabled={isAnimatedFinished}>
        <Icon
          name={'ios-search'}
          color={colors.inactiveTab}
          size={normalize(20, 'height')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
      <TextInput
        ref={searchInputRef}
        style={styles.input}
        placeholder={isAnimatedFinished ? placeholder : ''}
        placeholderTextColor={colors.inactiveTab}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
