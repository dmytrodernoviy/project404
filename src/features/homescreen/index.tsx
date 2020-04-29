import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, SafeAreaView, TextInput, View } from 'react-native';
import normalize from 'react-native-normalize';
import debounce from 'lodash.debounce';
import styles from './styles';
import ProductsList from '@src/features/homescreen/productsList';
import { ActivitySpinner, AnimatedScreenHeader } from '@src/components';
import { useSelector } from 'react-redux';
import { DispatcherService } from '@src/services';
import { isIOSPlatform, screenHeight } from '@src/utils/helpers';
import { ProductsSelectors } from '@src/redux/products/selectors';
import { HelperSelector } from '@src/redux/helper/selectors';
import { translationString } from '@src/translations';
import { translationsConstants } from '@src/constants';
import SearchableModal from '@src/features/homescreen/searchableModal';

const HomeScreen: React.FC = () => {
  const maxHeaderHeight = normalize(50, 'height');

  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const searchBarTranslate = useRef(new Animated.Value(normalize(300))).current;
  const hideAnimation = useRef(new Animated.Value(0)).current;
  const searchInputRef = useRef<TextInput>(null);

  const products = useSelector(ProductsSelectors.products);
  const locale = useSelector(HelperSelector.locale);
  const searchableData = useSelector(ProductsSelectors.searchableProducts);

  useEffect(() => {
    DispatcherService.getProducts({
      callback: () => {
        setIsFirstLoading(false);
      },
      page: 1,
    });
  }, []);

  const onChange = (searchQuery: string): void => {
    searchQuery && DispatcherService.searchProducts({ searchQuery });
  };

  const onSearchProduct = useCallback(debounce(onChange, 500), []);

  const toggleSearchInputFocus = (callbackValue: boolean): void => {
    const inputRef = searchInputRef.current;
    if (!callbackValue) {
      setTimeout(
        () => {
          inputRef && inputRef.blur();
        },
        isIOSPlatform() ? 300 : 0,
      );
      setTimeout(() => {
        DispatcherService.clearSearchableProducts();
        inputRef && inputRef.clear();
      }, 500);
    } else {
      setTimeout(() => {
        inputRef && inputRef.focus();
      }, 550);
    }
  };

  const toggleSearch = (toValue: number, callbackValue: boolean): void => {
    toggleSearchInputFocus(callbackValue);
    Animated.timing(searchBarTranslate, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsAnimationFinished(callbackValue);
    });
  };

  const toggleHideHeader = (toValue: number): void => {
    Animated.timing(hideAnimation, {
      toValue,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const headerOpacity = hideAnimation.interpolate({
    inputRange: [-maxHeaderHeight, 0],
    outputRange: [0, 1],
  });

  const titleTranslate = searchBarTranslate.interpolate({
    inputRange: [0, normalize(300)],
    outputRange: [-normalize(65, 'height'), 0],
  });

  const modalTranslate = searchBarTranslate.interpolate({
    inputRange: [0, normalize(300)],
    outputRange: [0, screenHeight],
  });

  const searchInputOpacity = searchBarTranslate.interpolate({
    inputRange: [0, normalize(300)],
    outputRange: [1, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      {isIOSPlatform() && <View style={styles.topBlock} />}
      <AnimatedScreenHeader
        placeholder={translationString(translationsConstants.search, locale)}
        searchBarTranslate={searchBarTranslate}
        isAnimatedFinished={isAnimationFinished}
        toggleSearch={toggleSearch}
        searchInputRef={searchInputRef}
        titleTranslate={titleTranslate}
        height={hideAnimation}
        locale={locale}
        opacity={headerOpacity}
        onSearchProduct={onSearchProduct}
        searchInputOpacity={searchInputOpacity}
      />
      <SearchableModal translateY={modalTranslate} data={searchableData} />
      {isFirstLoading ? (
        <ActivitySpinner
          isLoading={isFirstLoading}
          spinnerSize={normalize(40)}
        />
      ) : (
        <ProductsList data={products} toggleHideHeader={toggleHideHeader} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
