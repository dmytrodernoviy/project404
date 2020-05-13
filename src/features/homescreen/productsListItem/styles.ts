import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    borderRadius: normalize(30),
    width: '48%',
    height: normalize(200),
    shadowColor: colors.authAdd,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    borderRadius: normalize(30),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalize(15, 'height'),
  },
  image: {
    height: normalize(60),
    width: normalize(60),
    tintColor: colors.tabNavigatior,
  },
  priceText: {
    ...fonts.currentPrice,
    marginLeft: normalize(2),
  },
  text: {
    color: colors.tabNavigatior,
  },
  title: {
    ...fonts.productLabel,
    width: '75%',
    textAlign: 'center',
  },
  price: {
    flexDirection: 'row',
  },
  currency: {
    color: colors.tabNavigatior,
    fontSize: normalize(15, 'height'),
  },
});
