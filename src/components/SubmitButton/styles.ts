import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';
import { screenHeight } from '@src/utils/helpers';

const circleSize = screenHeight * 2;
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
  coverageLayout: {
    width: circleSize,
    height: circleSize,
    position: 'absolute',
    left: normalize(100) - circleSize / 2,
    top: normalize(25, 'height') - circleSize / 2,
    zIndex: 100,
    backgroundColor: colors.tabNavigatior,
    borderRadius: circleSize,
  },
});
