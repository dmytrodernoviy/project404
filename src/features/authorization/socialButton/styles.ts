import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 201,
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
    marginRight: normalize(70),
  },
  google: {
    backgroundColor: colors.google,
    marginBottom: normalize(20, 'height'),
    marginLeft: normalize(70),
  },
});
