import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(120, 'height'),
    backgroundColor: colors.userBlock,
    alignItems: 'center',
    borderBottomRightRadius: normalize(300),
    borderBottomLeftRadius: normalize(300),
    marginBottom: normalize(55, 'height'),
  },
  photo: {
    position: 'relative',
    top: normalize(120, 'height') - normalize(50),
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    backgroundColor: colors.inactiveTab,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: normalize(60),
    width: normalize(60),
    tintColor: colors.userBlock,
  },
});
