import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { screenHeight } from '../../utils/helpers';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: screenHeight * 2,
    height: screenHeight * 2,
    position: 'absolute',
    backgroundColor: colors.tabNavigatior,
    top: normalize(438, 'height') - screenHeight,
    left: normalize(134) - screenHeight,
    borderRadius: screenHeight,
  },
});
