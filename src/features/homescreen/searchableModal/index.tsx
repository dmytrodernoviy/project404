import { Animated, FlatList } from 'react-native';
import styles from './styles';
import React, { ReactElement } from 'react';
import SearchableProductItem from '@src/features/homescreen/searchableProductItem';

interface TProps {
  translateY: Animated.AnimatedInterpolation;
  data: Array<string>;
}

const SearchableModal: React.FC<TProps> = ({ translateY, data }) => {
  return (
    <Animated.View
      style={{ ...styles.modalContainer, transform: [{ translateY }] }}>
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        scrollEnabled={false}
        renderItem={({ item }): ReactElement => (
          <SearchableProductItem title={item} />
        )}
        keyExtractor={(item, index): string => `${item}${index}`}
      />
    </Animated.View>
  );
};

export default SearchableModal;
