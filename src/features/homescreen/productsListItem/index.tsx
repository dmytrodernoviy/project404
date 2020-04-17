import React from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { colors, images } from '@src/constants';
import { TProductItem } from '@src/constants/commonTypes';

const ProductsListItem: React.FC<{ item: TProductItem }> = ({ item }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={colors.productListItem} style={styles.gradient}>
        <Text
          style={[styles.text, styles.title]}
          ellipsizeMode={'tail'}
          numberOfLines={1}>
          {item.title2}
        </Text>
        <Image source={images.logo} style={styles.image} />
        <View style={styles.price}>
          <Text style={styles.currency}>{'\u20B4'}</Text>
          <Text style={[styles.priceText, styles.text]}>{item.price}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProductsListItem;
