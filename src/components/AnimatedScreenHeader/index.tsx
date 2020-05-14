import React from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Props } from './types';
import { translationString } from '@src/translations';
import { translationsConstants } from '@src/constants';
import SearchBar from '@src/components/SearchBar';

const AnimatedScreenHeader: React.FC<Props> = ({
  placeholder,
  locale,
  searchInputOpacity,
  searchInputRef,
  titleTranslate,
  searchBarTranslate,
  isAnimatedFinished,
  height,
  opacity,
  onSearchProduct,
  toggleSearch,
}) => {
  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity,
        transform: [{ translateY: height }],
      }}>
      <Animated.View
        style={{
          ...styles.titleWrapper,
          transform: [{ translateY: titleTranslate }],
        }}>
        <Text style={styles.titleText}>
          {translationString(translationsConstants.catalog, locale)}
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.searchBarContainer,
          transform: [{ translateX: searchBarTranslate }],
        }}>
        <SearchBar
          placeholder={placeholder}
          onChangeText={onSearchProduct}
          searchInputOpacity={searchInputOpacity}
          onAnimationStart={toggleSearch}
          isAnimatedFinished={isAnimatedFinished}
          searchInputRef={searchInputRef}
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={(): void => toggleSearch(normalize(300), false)}>
          <Text>Close</Text>
          <Icon
            name={'ios-close-circle'}
            size={normalize(20)}
            style={styles.closeIcon}
            color={'black'}
          />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default AnimatedScreenHeader;
