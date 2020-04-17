import { TProductItem } from '@src/constants/commonTypes';
import { Dimensions, Platform } from 'react-native';

export const { height: screenHeight, width: screenWidth } = Dimensions.get(
  'window',
);

export const isIOSPlatform = (): boolean => Platform.OS === 'ios';

export const optimizeResponse = {
  getProducts: (data: Array<TProductItem>): Array<TProductItem> =>
    data.map((item) => {
      return {
        id: item.id,
        title1: item.title1,
        title2: item.title2,
        picture: item.picture,
        price: item.price,
        price_old: item.price_old,
        aLabels: item.aLabels,
      };
    }),
};
