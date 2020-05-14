import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: '95%',
    height: normalize(40, 'height'),
    marginTop: normalize(5, 'height'),
    paddingHorizontal: normalize(10),
    backgroundColor: colors.userBlock,
    borderRadius: normalize(10),
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
    ...fonts.languagePickerItem,
    color: colors.authMain,
  },
  button: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
