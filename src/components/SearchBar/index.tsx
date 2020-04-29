import React from 'react';
import { TextInput, TouchableOpacity, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import styles from './styles';
import { Props } from './types';
import { colors } from '@src/constants';

const SearchBar: React.FC<Props> = ({
  placeholder,
  searchInputOpacity,
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
      <Animated.View
        style={{
          ...styles.textInputContainer,
          opacity: searchInputOpacity,
        }}>
        <TextInput
          editable={isAnimatedFinished}
          ref={searchInputRef}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.inactiveTab}
          onChangeText={onChangeText}
        />
      </Animated.View>
    </View>
  );
};

export default SearchBar;
