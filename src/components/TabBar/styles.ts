import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { isIOSPlatform } from '@src/utils/helpers';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    height: isIOSPlatform()
      ? normalize(50, 'height') + StaticSafeAreaInsets.safeAreaInsetsBottom
      : normalize(50, 'height'),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderTopRightRadius: normalize(30),
    borderTopLeftRadius: normalize(30),
  },
  bottomBlock: {
    height: StaticSafeAreaInsets.safeAreaInsetsBottom,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  iOSBarContainer: {
    paddingBottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
  },
  androidBarContainer: {
    backgroundColor: colors.tabNavigatior,
  },
  bothPlatformsContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
  },
});
