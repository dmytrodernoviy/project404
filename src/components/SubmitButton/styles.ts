import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.authMain,
    borderRadius: normalize(25, 'height'),
    height: normalize(50, 'height'),
    marginTop: normalize(10, 'height'),
    justifyContent: 'center',
    width: '60%',
  },
  positionRight: {
    alignSelf: 'flex-end',
  },
  label: {
    ...fonts.submit,
    color: colors.authAdd,
  },
});
