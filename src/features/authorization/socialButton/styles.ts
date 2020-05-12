import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    zIndex: -1,
  },
  containerButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: normalize(5, 'height'),
  },
  buttonContainer: {
    width: normalize(55),
    height: normalize(55),
    borderRadius: normalize(27.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    backgroundColor: colors.facebook,
    marginLeft: normalize(15),
  },
  google: {
    backgroundColor: colors.google,
  },
  hairLineContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hairLine: {
    width: '40%',
    height: 1,
    backgroundColor: colors.authMain,
  },
  label: {
    ...fonts.main_18,
    color: colors.authMain,
  },
});
