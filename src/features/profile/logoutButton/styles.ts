import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: '50%',
    height: normalize(50, 'height'),
    borderRadius: normalize(10),
    paddingHorizontal: normalize(10),
    backgroundColor: colors.userBlock,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginRight: normalize(10),
  },
});
