import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { SearchBar } from '@src/components';
import { Props } from './types';
import { translationString } from '@src/translations';
import { colors, translationsConstants } from '@src/constants';

const AnimatedScreenHeader: React.FC<Props> = ({
  placeholder,
  locale,
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
            color={colors.white}
          />
        </TouchableOpacity>
      </Animated.View>
      <View style={styles.hideBlock} />
    </Animated.View>
  );
};

export default AnimatedScreenHeader;
