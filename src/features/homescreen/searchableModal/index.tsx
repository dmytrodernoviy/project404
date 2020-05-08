import { Animated, FlatList } from 'react-native';
import styles from './styles';
import React, { ReactElement } from 'react';
import { Props } from '@src/features/homescreen/searchableModal/types';
import SearchableProductItem from '@src/features/homescreen/searchableProductItem';

const SearchableModal: React.FC<Props> = ({ translateY, data }) => {
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
