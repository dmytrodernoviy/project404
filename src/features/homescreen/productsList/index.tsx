import React, { RefObject, useCallback, useState } from 'react';
import { Animated, FlatList, RefreshControl, View } from 'react-native';
import normalize from 'react-native-normalize';
import ProductsListItem from '@src/features/homescreen/productsListItem';
import styles from './styles';
import { TProductItem } from '@src/constants/commonTypes';
import { colors } from '@src/constants';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsSelectors } from '@src/redux/products/selectors';
import { DispatcherService } from '@src/services';
import { ActivitySpinner } from '@src/components';
import { isIOSPlatform } from '@src/utils/helpers';

const ProductsList: React.FC<{
  data: Array<TProductItem>;
  hideAnimation: Animated.Value;
  productListRef: RefObject<FlatList>;
}> = ({ data, hideAnimation, productListRef }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const isRefreshing = useSelector(ProductsSelectors.isRefreshing);

  const setPagination = useCallback(
    ({ type }: { type: 'isRefreshing' | 'isLoadMore' }) => {
      if (type === 'isRefreshing') {
        setCurrentPage(() => {
          DispatcherService.getProducts({ dispatch, page: 1 });
          return 1;
        });
      } else {
        setCurrentPage((prevState) => {
          DispatcherService.getProducts({ dispatch, page: prevState + 1 });
          return prevState + 1;
        });
      }
    },
    [dispatch, setCurrentPage],
  );

  return (
    <Animated.FlatList
      ref={productListRef}
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
      contentInset={{ top: normalize(65, 'height') }}
      contentOffset={{ y: -normalize(65, 'height') }}
      renderItem={({ item }: { item: TProductItem }): Element => (
        <ProductsListItem item={item} />
      )}
      ItemSeparatorComponent={(): Element => <View style={styles.separator} />}
      keyExtractor={(item: TProductItem, index: number): number =>
        item.id + index
      }
      ListFooterComponent={(): Element => (
        <ActivitySpinner
          isLoading={true}
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
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: { y: hideAnimation },
            },
          },
        ],
        {
          useNativeDriver: true,
        },
      )}
    />
  );
};

export default ProductsList;
