import { Animated, FlatList, View } from 'react-native';
import styles from './styles';
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Props } from '@src/features/homescreen/searchableModal/types';
import SearchableProductItem from '@src/features/homescreen/searchableProductItem';
import { isIOSPlatform } from '@src/utils/helpers';

const SearchableModal: React.FC<Props> = ({ translateY, data }) => {
  return (
    <Animated.View
      style={{ ...styles.modalContainer, transform: [{ translateY }] }}>
      {isIOSPlatform() && (
        <BlurView blurType={'dark'} style={styles.blurView} />
      )}
      <FlatList
        data={data}
        contentContainerStyle={styles.flatlist}
        scrollEnabled={false}
        renderItem={({ item }) => <SearchableProductItem title={item} />}
        keyExtractor={(item, index): string => `${item}${index}`}
      />
      {isIOSPlatform() && <View style={styles.bottomBlock} />}
    </Animated.View>
  );
};

export default SearchableModal;
