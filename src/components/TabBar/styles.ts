import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { isIOSPlatform } from '@src/utils/helpers';

export default StyleSheet.create({
  container: {
    height: normalize(45, 'height'),
    position: 'absolute',
    zIndex: 0,
    bottom: isIOSPlatform() ? StaticSafeAreaInsets.safeAreaInsetsBottom : 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    borderTopRightRadius: normalize(30),
    borderTopLeftRadius: normalize(30),
    backgroundColor: colors.tabNavigatior,
    shadowColor: colors.activeTab,
    shadowOffset: {
      width: 0,
      height: -normalize(15, 'height'),
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 24,
  },
  centerTab: {
    position: 'relative',
    bottom: normalize(2, 'height'),
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
