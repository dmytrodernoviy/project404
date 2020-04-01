import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  error: {
    ...fonts.validateError,
    color: 'red'
  },
  errorView: {
    height: normalize(30, 'height'),
    justifyContent: 'center'
  },
  input: {
    color: colors.authMain,
    flex: 1,
    ...fonts.main_18
  },
  inputContainer: {
    borderBottomColor: colors.authMain,
    borderBottomWidth: 2,
    flexDirection: 'row',
    paddingBottom: normalize(10, 'height'),
    width: '100%'
  },
  rotate: {
    transform: [{ rotate: '-90deg' }]
  }
});
