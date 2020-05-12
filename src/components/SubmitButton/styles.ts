import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';
import { screenHeight } from '@src/utils/helpers';

const circleSize = screenHeight * 2;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.authMain,
    borderRadius: normalize(25, 'height'),
    height: normalize(50, 'height'),
    justifyContent: 'center',
  },
  label: {
    ...fonts.submit,
    color: colors.authMain,
  },
  buttonContainer: {
    height: normalize(50, 'height'),
    width: normalize(300),
    marginTop: normalize(5, 'height'),
  },
  loader: {
    width: normalize(50, 'height'),
    height: normalize(50, 'height'),
    borderRadius: normalize(25, 'height'),
    position: 'absolute',
    left: normalize(150) - normalize(25, 'height'),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.authMain,
  },
  coverageLayout: {
    width: circleSize,
    height: circleSize,
    position: 'absolute',
    left: normalize(150) - circleSize / 2,
    top: normalize(25, 'height') - circleSize / 2,
    backgroundColor: colors.tabNavigatior,
    borderRadius: circleSize,
  },
});
