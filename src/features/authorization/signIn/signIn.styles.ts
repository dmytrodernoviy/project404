import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  dismissContainer: {
    flex: 1,
  },
  formContainer: {
    zIndex: 30,
    elevation: 22,
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(25),
    paddingBottom: StaticSafeAreaInsets.safeAreaInsetsTop,
    paddingTop: StaticSafeAreaInsets.safeAreaInsetsTop * 1.5,
    position: 'absolute',
    shadowColor: colors.authMain,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 14.78,
    width: '100%',
  },
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: normalize(130, 'height'),
  },
  logo: {
    alignSelf: 'center',
    height: normalize(100),
    tintColor: colors.logo,
    width: normalize(100),
  },
});
