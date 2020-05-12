import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  error: {
    ...fonts.validateError,
    color: colors.error,
  },
  errorView: {
    height: normalize(30, 'height'),
    justifyContent: 'center',
  },
  input: {
    color: colors.authMain,
    flex: 1,
    ...fonts.main_18,
  },
  inputContainer: {
    borderBottomColor: colors.authMain,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: normalize(10, 'height'),
    width: '100%',
  },
  icon: {
    height: normalize(30),
    width: normalize(30),
  },
});
