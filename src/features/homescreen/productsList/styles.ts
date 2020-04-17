import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { isIOSPlatform } from '@src/utils/helpers';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: normalize(10),
    paddingTop: isIOSPlatform() ? 0 : normalize(80, 'height'),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  content: {
    paddingBottom: isIOSPlatform()
      ? normalize(70, 'height')
      : normalize(150, 'height'),
  },
  separator: {
    height: normalize(10, 'height'),
  },
  footer: {
    height: normalize(25, 'height'),
  },
});
