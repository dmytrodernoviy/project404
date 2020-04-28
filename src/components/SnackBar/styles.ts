import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    height: normalize(55, 'height') + StaticSafeAreaInsets.safeAreaInsetsTop,
    borderBottomRightRadius: normalize(20),
    borderBottomLeftRadius: normalize(20),
    alignItems: 'flex-end',
    opacity: 0.98,
    paddingHorizontal: normalize(10),
  },
  message: {
    textAlign: 'center',
    marginTop: normalize(20, 'height'),
    ...fonts.searchableTitle,
  },
});
