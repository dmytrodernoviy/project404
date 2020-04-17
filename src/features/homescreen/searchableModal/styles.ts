import { Dimensions, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { colors } from '@src/constants';
import { isIOSPlatform } from '@src/utils/helpers';

export default StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    backgroundColor: !isIOSPlatform() ? colors.tabNavigatior : undefined,
    opacity: !isIOSPlatform() ? 0.975 : 1,
    paddingTop: !isIOSPlatform() ? normalize(100, 'height') : 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flatlist: {
    paddingHorizontal: normalize(20),
  },
  bottomBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: StaticSafeAreaInsets.safeAreaInsetsBottom,
    backgroundColor: colors.tabNavigatior,
  },
});
