import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: normalize(45, 'height'),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.userBlock,
    shadowColor: colors.userBlock,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    ...fonts.main_18,
    color: colors.authMain,
  },
});
