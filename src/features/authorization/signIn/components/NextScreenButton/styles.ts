import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: -1,
    marginTop: normalize(10, 'height'),
  },
  label: {
    ...fonts.validateError,
    color: colors.logo,
  },
  signUp: {
    color: colors.authMain,
    ...fonts.validateError,
  },
});
