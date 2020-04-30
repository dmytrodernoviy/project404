import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.authMain,
    borderRadius: normalize(25, 'height'),
    height: normalize(50, 'height'),
    justifyContent: 'center',
    width: normalize(200),
  },
  positionRight: {
    alignSelf: 'flex-end',
  },
  label: {
    ...fonts.submit,
    color: colors.authAdd,
  },
  buttonContainer: {
    height: normalize(50, 'height'),
    width: normalize(200),
    marginTop: normalize(5, 'height'),
  },
  loader: {
    width: normalize(50, 'height'),
    height: normalize(50, 'height'),
    borderRadius: normalize(25, 'height'),
    position: 'absolute',
    left: normalize(100) - normalize(25, 'height'),
    justifyContent: 'center',
    backgroundColor: colors.authMain,
  },
});
