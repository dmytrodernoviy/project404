import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { isIOSPlatform } from '@src/utils/helpers';

export default StyleSheet.create({
  container: {
    height: normalize(45, 'height'),
    position: 'absolute',
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
  bottomBlock: {
    height: StaticSafeAreaInsets.safeAreaInsetsBottom,
    width: '100%',
    backgroundColor: colors.tabNavigatior,
    position: 'absolute',
    bottom: 0,
  },
});
