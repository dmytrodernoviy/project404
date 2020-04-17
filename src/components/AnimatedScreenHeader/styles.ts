import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { isIOSPlatform } from '@src/utils/helpers';

export default StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: isIOSPlatform() ? StaticSafeAreaInsets.safeAreaInsetsTop : 0,
    zIndex: 20,
    backgroundColor: colors.tabNavigatior,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(15, 'height'),
    shadowColor: colors.activeTab,
    shadowOffset: {
      width: 0,
      height: normalize(20, 'height'),
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 24,
  },
  titleWrapper: {
    position: 'absolute',
  },
  titleText: {
    ...fonts.main_18,
    color: colors.inactiveTab,
  },
  searchBarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    width: '20%',
    backgroundColor: colors.inactiveTab,
    height: normalize(25, 'height'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: normalize(10),
  },
  closeIcon: {
    marginTop: normalize(1.5, 'height'),
  },
  hideBlock: {
    position: 'absolute',
    zIndex: 60,
    right: 0,
    height: normalize(25, 'height'),
    width: normalize(19, 'width'),
    backgroundColor: colors.tabNavigatior,
  },
});
