import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export default StyleSheet.create({
  container: {
    height: normalize(50, 'height'),
    position: 'absolute',
    bottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    borderTopRightRadius: normalize(30),
    borderTopLeftRadius: normalize(30),
    backgroundColor: colors.tabNavigatior,
    shadowColor: colors.tabNavigatior,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  centerTab: {
    position: 'relative',
    bottom: normalize(10, 'height'),
    width: normalize(60),
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(60),
    borderWidth: normalize(5),
    borderRadius: normalize(60),
    backgroundColor: colors.tabNavigatior,
    borderColor: colors.tabNavigatior,
  },
});
