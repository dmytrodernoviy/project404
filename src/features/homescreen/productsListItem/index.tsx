import React from 'react';
import { Image, Text, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { colors, images } from '@src/constants';
import { TProductItem } from '@src/constants/commonTypes';
import { useProductItemAnimation } from '@src/features/homescreen/productsListItem/hooks';

interface TProps {
  item: TProductItem;
  index: number;
}

const ProductsListItem: React.FC<TProps> = ({ item, index }) => {
  const { opacity, itemScale } = useProductItemAnimation({ index });
  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity,
        transform: [{ scale: itemScale }],
      }}>
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
    </Animated.View>
  );
};

export default ProductsListItem;
