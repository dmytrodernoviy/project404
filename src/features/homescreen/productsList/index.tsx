import React, { useCallback, useRef } from 'react';
import {
  Animated,
  NativeScrollEvent,
  RefreshControl,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import ProductsListItem from '@src/features/homescreen/productsListItem';
import styles from './styles';
import { Props } from './types';
import { TProductItem } from '@src/constants/commonTypes';
import { colors } from '@src/constants';
import { useSelector } from 'react-redux';
import { ProductsSelectors } from '@src/redux/products/selectors';
import { DispatcherService } from '@src/services';
import { ActivitySpinner } from '@src/components';
import { isIOSPlatform } from '@src/utils/helpers';

const ProductsList: React.FC<Props> = ({ data, toggleHideHeader }) => {
  const isRefreshing = useSelector(ProductsSelectors.isRefreshing);
  const isLoadingMore = useSelector(ProductsSelectors.isLoadingMore);
  const dynamicValues = useRef({
    scrollValue: normalize(65, 'height'),
    scrollType: 'up',
    page: 1,
  });

  const setPagination = useCallback(
    ({ type }: { type: 'isRefreshing' | 'isLoadMore' }) => {
      if (type === 'isRefreshing') {
        dynamicValues.current.page = 1;
        DispatcherService.getProducts({
          page: dynamicValues.current.page,
        });
      } else {
        dynamicValues.current.page += 1;
        DispatcherService.getProducts({
          page: dynamicValues.current.page,
        });
      }
    },
    [],
  );

  const onScroll = ({
    nativeEvent,
  }: {
    nativeEvent: NativeScrollEvent;
  }): void => {
    const {
      contentOffset: { y },
    } = nativeEvent;

    const { scrollValue, scrollType } = dynamicValues.current;

    if (y < normalize(65, 'height') || isLoadingMore) {
      return;
    }

    if (y > scrollValue && scrollType === 'up') {
      toggleHideHeader(-normalize(65, 'height'));
      dynamicValues.current.scrollType = 'down';
    } else if (y < scrollValue && scrollType === 'down') {
      toggleHideHeader(0);
      dynamicValues.current.scrollType = 'up';
    }

    dynamicValues.current.scrollValue = y;
  };

  return (
    <Animated.FlatList
      scrollEventThrottle={16}
      refreshing={isRefreshing}
      style={styles.container}
      contentContainerStyle={styles.content}
      data={data}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          tintColor={colors.activeTab}
          onRefresh={(): void => {
            setPagination({ type: 'isRefreshing' });
          }}
        />
      }
      contentInset={{ top: normalize(95, 'height') }}
      contentOffset={{ y: -normalize(95, 'height') }}
      renderItem={({ item }: { item: TProductItem }): Element => (
        <ProductsListItem item={item} />
      )}
      ItemSeparatorComponent={(): Element => <View style={styles.separator} />}
      keyExtractor={(item: TProductItem, index: number): number =>
        item.id + index
      }
      ListFooterComponent={(): Element => (
        <ActivitySpinner
          isLoading={isLoadingMore}
          containerStyle={styles.footer}
          spinnerSize={normalize(25)}
        />
      )}
      onEndReached={(): void => {
        setPagination({ type: 'isLoadMore' });
      }}
      onEndReachedThreshold={isIOSPlatform() ? 0 : 0.01}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      onScroll={onScroll}
    />
  );
};

export default ProductsList;
