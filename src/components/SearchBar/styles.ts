import { StyleSheet } from 'react-native';
import { colors, fonts } from '@src/constants';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    ...fonts.main_18,
    color: colors.inactiveTab,
    width: '80%',
  },
  textInputContainer: {
    width: '80%',
  },
  searchIcon: {
    marginHorizontal: normalize(10),
  },
});
